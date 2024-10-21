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

for (let i = 0 ; i<products.length; i++) {
  let productItem = products[i]

  let productName = document.createElement ("h2")
  productName.textContent = productItem.name
  let productDescription = document.createElement ("p")
  productDescription.textContent = productItem.description
  let productImage = document.createElement ("img")
  productImage.src = `images/${productItem.image}`

  let sectionProduct = document.getElementById("productList")
  sectionProduct.appendChild (productName)
  sectionProduct.appendChild (productDescription)
  sectionProduct.appendChild (productImage)
}

