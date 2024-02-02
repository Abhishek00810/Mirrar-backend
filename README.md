
E-Commerce API
Welcome to the E-Commerce REST API project! This project is built using Laravel/Node.js and provides a set of endpoints to manage products, product variants, and search functionality.

Table of Contents
Features
Getting Started
Endpoints
Testing
Deliverables
Evaluation Criteria
Features
Product and Product Variant CRUD Operations:

Create, update, delete, and retrieve products.
A product has a name, description, price, and can have multiple variants.
A variant has a name, SKU, additional cost, and stock count.
Creating a product handles creating/updating/deleting variants.
Search Functionality:

Endpoint for searching products by name, description, or variant name.
Test Driven Development (TDD):

Tests for models to ensure data storage and retrieval correctness.
Tests for each endpoint to ensure their expected functionality.
Tests for search functionality.



E-Commerce API
Welcome to the E-Commerce REST API project! This project is built using Laravel/Node.js and provides a set of endpoints to manage products, product variants, and search functionality.

Table of Contents
Features
Getting Started
Endpoints
Testing
Deliverables
Evaluation Criteria
Features
Product and Product Variant CRUD Operations:

Create, update, delete, and retrieve products.
A product has a name, description, price, and can have multiple variants.
A variant has a name, SKU, additional cost, and stock count.
Creating a product handles creating/updating/deleting variants.
Search Functionality:

Endpoint for searching products by name, description, or variant name.
Test Driven Development (TDD):

Tests for models to ensure data storage and retrieval correctness.
Tests for each endpoint to ensure their expected functionality.
Tests for search functionality.
Getting Started
Clone the Repository:

bash
Copy code
git clone https://github.com/yourusername/e-commerce-api.git
cd e-commerce-api
Install Dependencies:

bash
Copy code
# For Laravel
composer install

# For Node.js
npm install
Database Setup:

bash
Copy code
# For Laravel
php artisan migrate

# For Node.js
# Your database setup commands here
Run the Application:

bash
Copy code
# For Laravel
php artisan serve

# For Node.js
# Your start script or command here
Endpoints
Product Endpoints:

POST /api/products: Create a new product.
PUT /api/products/{id}: Update a product.
DELETE /api/products/{id}: Delete a product.
GET /api/products/{id}: Retrieve a product.
Variant Endpoints:

POST /api/products/{id}/variants: Create a new variant for a product.
PUT /api/products/{id}/variants/{variantId}: Update a variant.
DELETE /api/products/{id}/variants/{variantId}: Delete a variant.
GET /api/products/{id}/variants: Retrieve all variants for a product.
Search Endpoint:

GET /api/products/search?q={query}: Search products by name, description, or variant name.
![create-1](https://github.com/Abhishek00810/Mirrar-backend/assets/73817744/505a4fef-6fdc-46d2-836c-50e1056aea3f)
![create-2](https://github.com/Abhishek00810/Mirrar-backend/assets/73817744/ac104edb-5242-4933-bcb2-b62e6d359729)


![retreive-1](https://github.com/Abhishek00810/Mirrar-backend/assets/73817744/601e7307-02a6-4a41-be34-28c2591d9792)
![retrieve-2](https://github.com/Abhishek00810/Mirrar-backend/assets/73817744/7cc0886c-840b-486b-be4a-29411295a6a6)
![Screenshot 2024-02-03 013240](https://github.com/Abhishek00810/Mirrar-backend/assets/73817744/498fe2fc-dc05-41d1-b798-b274d776f2fe)
