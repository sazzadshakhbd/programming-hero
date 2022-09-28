// Use localstorage to manage cart data
const addToDb = (id) => {

    // let shoppingCart = {};
    let shoppingCart;

    // Get the shopping cart
    const storedCart = localStorage.getItem('shopping-cart')
    if (storedCart) {
        // console.log(typeof storedCart)
        shoppingCart = JSON.parse(storedCart)
    } else {
        shoppingCart = {}
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

export { addToDb }