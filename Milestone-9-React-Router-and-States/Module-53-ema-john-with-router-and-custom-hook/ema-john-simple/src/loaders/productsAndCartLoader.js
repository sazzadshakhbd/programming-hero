import { getStoreCard } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
    // Get Products
    const productsData = await fetch('products.json');
    const products = await productsData.json();

    // get cart
    const saveCart = getStoreCard();
    const initialCart = []
    // console.log(products)
    // console.log("saved Cart", saveCart);
    for (const id in saveCart) {
        // console.log(id)
        const addedProduct = products.find(product => product.id === id)
        // console.log(id, addedProduct)
        if (addedProduct) {
            const quantity = saveCart[id];
            // console.log(id, quantity)
            addedProduct.quantity = quantity
            initialCart.push(addedProduct)
        }
    }

    return { products: products, initialCart: initialCart };
}