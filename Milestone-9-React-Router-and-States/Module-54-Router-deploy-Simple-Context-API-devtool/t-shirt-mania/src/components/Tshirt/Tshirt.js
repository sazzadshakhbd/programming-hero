import React from 'react';
import './Tshirt.css';

const Tshirt = ({ tshirt, handelToCart }) => {
    const { name, picture, price } = tshirt;
    return (
        <div className='tshirt'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <h4>Price: {price}</h4>
            <button onClick={() => handelToCart(tshirt)}>Buy This</button>
        </div>
    );
};

export default Tshirt;