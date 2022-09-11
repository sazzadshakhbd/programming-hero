// Common Function
const getInputValueById = (id) => {
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () => {
    const product = getInputValueById('product-name-field');
    const quantity = getInputValueById('product-quantity-field');
    // console.log(product, quantity);

    // Display Prouct UI
    addProductToDisplay(product, quantity);

    // Set to Locatstorage
    // Simple Way

    // localStorage.setItem(product, quantity);
    saveItemLocalStorage(product, quantity);
}


const getShoppingCartFromLocalStorage = () => {
    let savedCart = localStorage.getItem('cart');
    let cart = {};
    if (savedCart) {
        cart = JSON.parse(savedCart)
    }
    return cart;
}

const saveItemLocalStorage = (product, quantity) => {
    const cart = getShoppingCartFromLocalStorage();
    // Add Product to the object as property
    cart[product] = quantity;
    const cartStringify = JSON.stringify(cart);

    // Save to localstorage
    localStorage.setItem('cart', cartStringify);
}

const addProductToDisplay = (product, quantity) => {
    const mainContainer = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    mainContainer.appendChild(li);
}

const displayStoredProduct = () => {
    const cart = getShoppingCartFromLocalStorage();
    for (const product in cart) {
        const quantity = cart[product];
        console.log(product, quantity);
        addProductToDisplay(product, quantity);
    }
}
displayStoredProduct();