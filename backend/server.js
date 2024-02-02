const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 5001
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const mongoose = require("mongoose");
const MONGO_URI = 'mongodb://localhost/ECA';


global.form1Data = {};
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });


const variantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    sku: {
        type: String,
        required: true,
    },
    additionalCost: {
        type: Number,
        default: 0,
    },
    stockCount: {
        type: Number,
        default: 0,
    },
});

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    variants: [variantSchema], // Embed the Variant schema within the Product schema
});

const Product = mongoose.model('Product', productSchema);

app.get('/', function (req, res) {
    res.send("function backend is ready")
})

app.get('/create', urlencodedParser, function (req, res) {
    res.sendFile(__dirname + "/views/create.html")
})

app.post('/productcreate', urlencodedParser, function (req, res) {
    const newProduct = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
      });
      global.form1Data = newProduct;
    res.sendFile(__dirname + "/views/variant.html")
})

app.post('/create', urlencodedParser, function (req, res) {
    const newProduct = global.form1Data
    const newVariant = { name: req.body.name, sku: req.body.sku, additionalCost: req.body.stockCount, stockCount: req.body.size }
    console.log(newProduct)
    console.log(req.body)
    const final_submit = new Product({
        name: newProduct.name,
        description: newProduct.description,
        price: newProduct.price,
        variants: [
          newVariant
        ],
      });
      final_submit.save()
      .then(() => {
        console.log('Product saved successfully!');
        res.send("posted value successfully")
      })
      .catch((error) => {
        if(error.code === 11000) 
        {
            Product.findOneAndUpdate(
                { name: newProduct.name },
                { $push:  {variants: newVariant}},
                { new: true } // To return the modified document
              )
              .then(result => {
                console.log(' document updated');
                mongoose.connection.close();
              })
              .catch(error => {
                console.error('Error updating user:', error);
                mongoose.connection.close();
              });
              res.send("Pushed variant")
        }
        else{
            console.error('Error saving product:', error);
            res.send("error value")
        }
      });
})


app.get('/delete', function(req, res){
    res.sendFile(__dirname + "/views/delete.html")
})

app.post('/delete', urlencodedParser, function (req, res) {
    Product.deleteOne({ name: req.body.name })
  .then(result => {
    res.send("Product deleted")
  })
  .catch(error => {
    console.error('Error deleting user:', error);
  });
})


app.get('/retrieve', function (req, res) {
    res.sendFile(__dirname + "/views/search.html")
})

app.post('/retrieve', urlencodedParser, function (req, res) {
    Product.find({ name: req.body.name })
      .then(foundUsers => {
        if (foundUsers.length > 0) {
          res.json(foundUsers);
        } else {
          console.log('No users found with the specified criteria.');
          res.send("No users found with the specified criteria.");
        }
      })
      .catch(error => {
        console.error('Error searching for users:', error);
        res.status(500).send('Internal Server Error');
      });
  });
  

app.listen(port, () => {
    console.log(`Port is listening to ${port}`)
})