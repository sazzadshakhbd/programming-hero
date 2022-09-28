// Use localstorage to manage cart data
const addToDb = (id) => {

    // let shoppingCart = {};
    let shoppingCart = {};

    // Get the shopping cart from localstorage
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        // console.log(typeof storedCart)
        shoppingCart = JSON.parse(storedCart)
    }

    // Add Quantity
    const quantity = shoppingCart[id];
    if (quantity) {
        const newQuantity = quantity + 1;
        shoppingCart[id] = newQuantity;
    } else {
        shoppingCart[id] = 1;
    }
    localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
}
const removeFromDb = (id) => {
    // console.log('fak db', id)
    const storedCart = localStorage.getItem('shopping-cart');
    const shoppingCart = JSON.parse(storedCart)
    if (id in shoppingCart) {
        // console.log('exists in te cart');
        delete shoppingCart[id];
        localStorage.setItem('shopping-cart', JSON.stringify(shoppingCart));
    }
}

const deleteShoppingCart = () => {
    localStorage.removeItem('shopping-cart')
}

export { addToDb, removeFromDb, deleteShoppingCart }