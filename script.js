// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Newsletter Subscription
document.querySelector('.newsletter button').addEventListener('click', () => {
    alert("Thank you for subscribing!");
});



//
// Sample cart array to store selected items
let cart = [];

// Function to add products to the cart
function addToCart(productName, productPrice) {
    let product = { name: productName, price: productPrice };
    cart.push(product);
    alert(`${productName} has been added to your cart.`);
    updateCart();
}

// Function to update the cart count (if needed in UI)
function updateCart() {
    let cartIcon = document.querySelector(".fa-shopping-cart");
    cartIcon.setAttribute("data-count", cart.length);
}

// Function to filter products by category
function filterCategory(category) {
    let allCategories = ["men", "ladies", "kids", "sale"];
    
    allCategories.forEach(cat => {
        let products = document.querySelectorAll(`.${cat}`);
        products.forEach(product => {
            product.style.display = (cat === category || category === "all") ? "grid" : "none";
        });
    });
}

// Initialize all categories to be visible on page load
document.addEventListener("DOMContentLoaded", () => {
    filterCategory("all"); // Show all products by default
});
