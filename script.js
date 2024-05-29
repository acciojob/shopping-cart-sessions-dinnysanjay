// This is the boilerplate code given for you
// Product data
const products = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
  { id: 4, name: "Product 4", price: 40 },
  { id: 5, name: "Product 5", price: 50 },
];

// Function to display products
function displayProducts() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";
  products.forEach(product => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${product.name} - $${product.price} <button onclick="addToCart(${product.id})">Add to Cart</button>`;
    productList.appendChild(listItem);
  });
}

// Function to add a product to the cart
function addToCart(productId) {
  const selectedProduct = products.find(product => product.id === productId);
  if (selectedProduct) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    // Check if the product is already in the cart
    const existingProductIndex = cart.findIndex(product => product.id === productId);
    if (existingProductIndex !== -1) {
      // If the product is already in the cart, increment its quantity
      cart[existingProductIndex].quantity++;
    } else {
      // If the product is not in the cart, add it with a quantity of 1
      selectedProduct.quantity = 1;
      cart.push(selectedProduct);
    }
    sessionStorage.setItem("cart", JSON.stringify(cart));
    displayCart();
  }
}



// Function to display the cart
function displayCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  const cart = JSON.parse(sessionStorage.getItem("cart")) || [];
  cart.forEach(product => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.name} - $${product.price}`;
    cartList.appendChild(listItem);
  });
}

// Function to clear the cart
function clearCart() {
  sessionStorage.removeItem("cart");
  displayCart();
}

// Initial setup
window.onload = function() {
  displayProducts();
  displayCart();
  const clearCartBtn = document.getElementById("clear-cart-btn");
  clearCartBtn.addEventListener("click", clearCart);
};

// You can modify this code
// Product data
