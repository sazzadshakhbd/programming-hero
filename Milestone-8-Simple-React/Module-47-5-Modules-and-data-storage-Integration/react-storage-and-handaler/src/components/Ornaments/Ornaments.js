import React from 'react';
import './Ornaments.css';

const Ornaments = (props) => {
    const { name, price, id } = props;
    const addToCrt = (id) => {
        console.log('item added', id);
    }
    const addToCartActive = () => {
        addToCrt(id);
    }
    return (
        <div className='product'>
            <h2>Buy this products: {name}</h2>
            <p>Only for: ${price}</p>
            <p>Products id: {id}</p>
            <button onClick={addToCartActive}>Add To Cart</button>
            <button onClick={() => addToCrt(id)}>Purchase</button>
        </div>
    );
};

export default Ornaments;