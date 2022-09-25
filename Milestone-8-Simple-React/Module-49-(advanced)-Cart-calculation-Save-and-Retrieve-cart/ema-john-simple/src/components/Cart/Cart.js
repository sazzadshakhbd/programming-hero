import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Order Length: {props.cart.length}</p>

        </div>
    );
};

export default Cart;