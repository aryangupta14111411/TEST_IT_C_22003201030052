// script.js
const quantityInput = document.getElementById('quantity');
const totalPriceElement = document.querySelector('.total-price');
const buyButton = document.querySelector('.buy-button');
const productPrice = 15;

quantityInput.addEventListener('input', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = productPrice * quantity;
    totalPriceElement.textContent = `Total Price: Rs. ${totalPrice}`;
});

buyButton.addEventListener('click', () => {
    const quantity = parseInt(quantityInput.value) || 1;
    const totalPrice = productPrice * quantity;
    alert(`You added ${quantity} items to your cart for Rs. ${totalPrice}`);
});
