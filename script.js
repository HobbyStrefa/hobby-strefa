let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let cartTotal = document.getElementById("cartTotal");
    
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        cartItems.innerHTML += `<p>${item.name} - ${item.price} PLN</p>`;
        total += item.price;
    });

    cartTotal.innerText = total;
}
