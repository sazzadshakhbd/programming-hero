import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json()
                .then(data => setProducts(data)))
    }, []);

    const handelAddToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(product);
    }


    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handelAddToCart={handelAddToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h4>Order Summary</h4>
                <p>Order Length: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;