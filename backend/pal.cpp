#include<bits/stdc++.h>
using namespace std;
class TreeNode
{
    public:
    TreeNode* left, *right;
    int val = 0;
    TreeNode(int val)
    {
        this->val = val;
        left = NULL;
        right = NULL;
    }
};
int main()
{
    TreeNode* root = new TreeNode(0);
    string s;
    cin>>s;
    vector<int> v;
    int i = 0;
    while(i<s.length())
    {
        int num = 0;
        while(i<s.length() && s[i]!=' ')
        {
            num = num*10 + s[i]-'0';
        }
        v.push_back(num);
    }
    
}