document.addEventListener("DOMContentLoaded", function () {
    const orderSummary = {
        subtotal: 100.00,  // Placeholder for subtotal
        shipping: 5.00,    // Placeholder for shipping cost
        tax: 0.00,         // Tax will be calculated here
        total: 105.00      // Total cost will be calculated here
    };

    function updateOrderSummary() {
        const tax = orderSummary.subtotal * 0.08;  // 8% tax
        orderSummary.tax = tax;
        orderSummary.total = orderSummary.subtotal + orderSummary.shipping + orderSummary.tax;

        // Update DOM with new totals
        document.getElementById('order-subtotal').textContent = `$${orderSummary.subtotal.toFixed(2)}`;
        document.getElementById('order-shipping').textContent = `$${orderSummary.shipping.toFixed(2)}`;
        document.getElementById('order-tax').textContent = `$${orderSummary.tax.toFixed(2)}`;
        document.getElementById('order-total').textContent = `$${orderSummary.total.toFixed(2)}`;
    }

    updateOrderSummary();

    // Function for placing an order
    window.placeOrder = function() {
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const postalCode = document.getElementById("postal-code").value;
        const paymentMethod = document.getElementById("payment-method").value;
        const agreeTerms = document.getElementById("agree-terms").checked;

        if (!firstName || !lastName || !address || !postalCode || !agreeTerms) {
            alert("Please fill in all the required fields and agree to the terms.");
            return;
        }

        const orderMessage = `
            *New Order*\n
            Name: ${firstName} ${lastName}\n
            Address: ${address}, Postal Code: ${postalCode}\n
            Payment Method: ${paymentMethod}\n
            Order Summary: \n
            Subtotal: $${orderSummary.subtotal.toFixed(2)}\n
            Shipping: $${orderSummary.shipping.toFixed(2)}\n
            Tax: $${orderSummary.tax.toFixed(2)}\n
            Total: $${orderSummary.total.toFixed(2)}
        `;

        const whatsappUrl = `https://wa.me/+94741722005?text=${encodeURIComponent(orderMessage)}`;
        window.location.href = whatsappUrl;
    };
});
