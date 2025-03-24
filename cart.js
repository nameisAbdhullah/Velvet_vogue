document.querySelector('.slide-cart-btn').addEventListener('mouseenter', function() {
    this.style.right = "20px";
});

document.querySelector('.slide-cart-btn').addEventListener('mouseleave', function() {
    this.style.right = "-100px";
});

document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function() {
        let quantity = this.previousElementSibling;
        quantity.textContent = parseInt(quantity.textContent) + 1;
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const cartItems = document.querySelectorAll(".cart-item");
    const subtotalElement = document.getElementById("subtotal");
    const taxElement = document.getElementById("tax");
    const totalElement = document.getElementById("total");

    function updateCartTotal() {
        let subtotal = 0;
        cartItems.forEach(item => {
            const price = parseFloat(item.querySelector(".price").textContent.replace("$", ""));
            const quantity = parseInt(item.querySelector(".quantity").textContent);
            subtotal += price * quantity;
        });

        const tax = subtotal * 0.08; // 8% tax
        const total = subtotal + tax;

        subtotalElement.textContent = `$${subtotal.toFixed(2)}`;
        taxElement.textContent = `$${tax.toFixed(2)}`;
        totalElement.textContent = `$${total.toFixed(2)}`;
    }

    cartItems.forEach(item => {
        const increaseBtn = item.querySelector(".increase");
        const decreaseBtn = item.querySelector(".decrease");
        const quantityElement = item.querySelector(".quantity");

        increaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            quantity++;
            quantityElement.textContent = quantity;
            updateCartTotal();
        });

        decreaseBtn.addEventListener("click", () => {
            let quantity = parseInt(quantityElement.textContent);
            if (quantity > 1) {
                quantity--;
                quantityElement.textContent = quantity;
                updateCartTotal();
            }
        });
    });

    updateCartTotal();
});
