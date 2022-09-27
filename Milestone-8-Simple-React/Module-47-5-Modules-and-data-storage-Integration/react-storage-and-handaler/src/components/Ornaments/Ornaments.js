import React from 'react';

const Ornaments = (props) => {
    const { name, price, id } = props
    return (
        <div>
            <h2>Buy this products: {name}</h2>
            <p>Only for: ${price}</p>
            <p>Products id: {id}</p>
        </div>
    );
};

export default Ornaments;