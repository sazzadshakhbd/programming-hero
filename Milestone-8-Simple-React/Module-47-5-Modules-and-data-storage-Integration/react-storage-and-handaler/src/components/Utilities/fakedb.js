// Use localstorage to manage cart data
const addToDb = (id) => {
    const quantity = localStorage.getItem(id);
    if (quantity) {
        const newQuantity = parseInt(quantity) + 1;
        localStorage.setItem(id, newQuantity)
        console.log('Already exist');
    } else {
        console.log('New Iem')
        localStorage.setItem(id, 1)
    }
    // localStorage.setItem(id, 1)
}

export { addToDb }