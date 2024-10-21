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

for (i = 0 ; i < products.length; i++ ) {
  let productItem = products[i]

  let productSection = document.getElementById ("productList")

  let productDiv = document.createElement ("div")
  let productImage = document.createElement ("img")
  let productName = document.createElement ("h2")
  let productDesc = document.createElement ("p")

  productName.textContent = productItem.name
  productImage.src = `./images/${productItem.image}`
  productDesc.textContent = productItem.description

  productDiv.appendChild (productName)
  productDiv.appendChild (productDesc)
  productDiv.appendChild (productImage)

  productSection.appendChild (productDiv)

}