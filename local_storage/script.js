const productInput = document.getElementById('product');
const priceInput = document.getElementById('price');
const addButton = document.getElementById('add-product');

addButton.addEventListener('click', () => {
    const key = productInput.value;
    const value = priceInput.value;

    if (key && value) {
        localStorage.setItem(key, value);
        alert(`Key: ${key}, Value: ${value} saved to localstorage.`);
        productInput.value = '';
        priceInput.value = '';
    } else {
        alert('Please input both a product and price.');
    }
});
