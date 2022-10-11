import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReveiwItem from '../ReveiwItem/ReveiwItem';
import { addToDb, deleteShoppingCart, getStoreCard } from '../../utilities/fakedb';

const Orders = () => {
    const { initialCart } = useLoaderData(); //{ products: products, initialCart: initialCart }
    const [cart, setCart] = useState(initialCart);
    const handelRemoveItem = (id) => {
        // console.log(id);
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining);
        removeFromDb(id);
    }
    const clearCut = () => {
        setCart([]);
        deleteShoppingCart();
    }
    return (
        <div className='shop-container'>
            <div className="orders-container">
                {
                    cart.map(product => <ReveiwItem
                        key={product.id}
                        product={product}
                        handelRemoveItem={handelRemoveItem}></ReveiwItem>)
                }
                {
                    cart.length === 0 && <h2>No Items for review. Please <Link to="/">Shop more..</Link></h2>
                }
            </div>
            <div className="cart-container">
                <Cart clearCut={clearCut} cart={cart}></Cart>
            </div>
            {/* <h2>THis is orders page {products.length}</h2>
            <p>Initial Cart: {initialCart.length}</p>
            <p>Initial Cart: {cart.length}</p> */}

        </div>
    );
};

export default Orders;