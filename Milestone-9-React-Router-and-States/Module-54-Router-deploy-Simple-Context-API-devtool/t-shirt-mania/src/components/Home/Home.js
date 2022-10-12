import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const tshirts = useLoaderData();
    const [cart, setCart] = useState([])
    const handelToCart = (tshirt) => {
        // console.log(tshirt)
        const esists = cart.find(ts => ts._id === tshirt._id);
        if (esists) {
            alert('t-shirt already added')
        } else {
            const newCart = [...cart, tshirt];
            setCart(newCart);
            alert('Successfully Added')
        }
    }
    const handelRemoveItem = (tshirt) => {
        // console.log(tshirt);
        const remaining = cart.filter(ts => ts._id !== tshirt._id)
        setCart(remaining);
    }
    return (
        <div className='home-container'>
            <div className="t-shirt-container">
                {
                    tshirts.map(tshirt => <Tshirt handelToCart={handelToCart} key={tshirt._id} tshirt={tshirt}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} handelRemoveItem={handelRemoveItem}></Cart>
            </div>
        </div>
    );
};

export default Home;