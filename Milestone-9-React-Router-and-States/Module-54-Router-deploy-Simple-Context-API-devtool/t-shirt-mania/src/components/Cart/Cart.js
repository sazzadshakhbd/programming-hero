import React from 'react';
import './Cart.css'

const Cart = ({ cart, handelRemoveItem }) => {
    let message;
    if (cart.length === 0) {
        message = <p>Please buy at least one item !!!</p>
    } else if (cart.length === 1) {
        message = <div>
            <h3>Please take one for me</h3>
            <h4>Please take another one for ypu</h4>
            <h4><small>Please take another one for me</small></h4>
        </div>
    }
    else {
        message = <p>Thanks for buying!</p>
    }
    return (
        <div>
            <h3 className={cart.length === 2 ? 'orange' : 'blue'}>Order Summary</h3>
            <h4 className={`bold ${cart.length === 2 ? 'teal' : 'tomato'}`}>Order Quantity: {cart.length}</h4>
            {
                cart.map(tshirt =>
                    <p key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handelRemoveItem(tshirt)}>X</button>
                    </p>)
            }
            {
                message
            }
            {
                cart.length === 3 ? <p>gift 3 person</p> : <p>buy this t-shirt</p>
            }
            <p>And Operator</p>
            {
                cart.length === 2 && <h2>Double Items</h2>
            }
            <p>Or Operator</p>
            {
                cart.length === 4 || <h2>Not 4 items</h2>
            }
        </div>
    );
};

export default Cart;


/*
    Conditional Rendering:
    1. Use element in a variable and then use if-else to set value.
    2. ternary operator condition ? true : false
    3. && Operator (if condition is true, i want to display something)
    4. || operator (if condition is false, i want to display something)
*/