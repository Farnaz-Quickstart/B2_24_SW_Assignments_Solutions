// Function to display the products on the webpage
// Array of product objects
let products = [
  {
    name: "Laptop",
    price: 999.99,
    description: "A high-performance laptop for work and gaming.",
    image: "laptop.jpg"
  },
  {
    name: "Smartphone",
    price: 499.99,
    description: "A smartphone with a great camera and fast processor.",
    image: "smartphone.jpg"
  },
  {
    name: "Headphones",
    price: 149.99,
    description: "Noise-cancelling headphones for immersive sound.",
    image: "headphones.jpg"
  }
];


function displayProducts() {
  let productContainer = document.getElementById("productContainer");

  // Clear previous content
  productContainer.innerHTML = "";

  // Loop through each product in the array
  products.forEach(product => {
    // Create elements for product display
    let productDiv = document.createElement("div");
    let productName = document.createElement("h2");
    let productPrice = document.createElement("p");
    let productDescription = document.createElement("p");
    let productImage = document.createElement("img");

    // Set content and attributes
    productName.textContent = product.name;
    productPrice.textContent = `Price: $${product.price}`;
    productDescription.textContent = product.description;
    productImage.src = product.image;
    productImage.alt = product.name;

    // Append to the product div
    productDiv.appendChild(productName);
    productDiv.appendChild(productPrice);
    productDiv.appendChild(productDescription);
    productDiv.appendChild(productImage);

    // Append product div to the container
    productContainer.appendChild(productDiv);
  });
}
