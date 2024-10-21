# Assignments
## JavaScript: Create a Product List Page
### Objective:  
Build a simple webpage that displays a list of products with details like name, price, and an image. You
need to use JavaScript objects to represent products and DOM manipulation to dynamically display
the product information on the webpage.
 
### Instructions 
1. HTML Part: 
- The page should have a section where products will be dynamically displayed.
- There should also be a button that, when clicked, loads the products.
 
2. JavaScript Part (functions and variables): 
- Define an array of objects, each representing a product.
- Write code to dynamically add those products to the DOM when the "Load Products" button is
clicked.
 
### Reference:
1. Start by defining an object, which represents a single product. For example, a product can have
properties like name, price, description, and image.
```
let product1 = {
name: "Laptop",
price: 999.99,
description: "A high-performance laptop for work and gaming.",
image: "laptop.jpg" 
};
```

2. Now you can define an array of these products:
```
let products = [
  {
  name: "Laptop",
  price: 999.99,
  description: "A high-performance laptop for work and gaming.",
  image: "laptop.jpg" },
  {
  name: "Smartphone",
  price: 499.99,
  description: "A smartphone with a great camera and fast processor.",
  image: "smartphone.jpg" },
  {
  name: "Headphones",
  price: 149.99,
  description: "Noise-cancelling headphones for immersive sound.",
  image: "headphones.jpg" }
];
```
3. You are iterating through each product in the products array. For each product, you'll need to:
- Create new HTML elements: Create a div for each product to hold the details, as well as
elements for displaying the product's name, price, description, and image.