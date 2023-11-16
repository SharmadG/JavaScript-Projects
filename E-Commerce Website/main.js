document.addEventListener("DOMContentLoaded", function () {

    const productsSection = document.getElementById("products");

    const products = [
        { id: 1, name: "Product 1", price: 500 },
        { id: 2, name: "Product 2", price: 750 },
        { id: 3, name: "Product 3", price: 1000 },
    ];

    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.classList.add("product");
        productElement.innerHTML = `
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p> <!-- Updated here -->
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productElement);
    });
});

function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}
