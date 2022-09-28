import React from 'react';
import { addToDb, removeFromDb } from '../Utilities/fakedb';
import './Ornaments.css';

const Ornaments = (props) => {
    const { name, price, id } = props;
    const addToCrt = (id) => {
        // localStorage.setItem(id, 1)
        addToDb(id);
    }
    const removeFromCart = (id) => {
        // console.log('removing', id)
        removeFromDb(id);
    }
    return (
        <div className='product'>
            <h2>Buy this products: {name}</h2>
            <p>Only for: ${price}</p>
            <p>Products id: {id}</p>
            <button onClick={() => addToCrt(id)}>Add To Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Ornaments;