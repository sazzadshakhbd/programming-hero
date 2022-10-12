import React from 'react';

const Cart = ({ cart, handelRemoveItem }) => {
    return (
        <div>
            <h3>Order Summary</h3>
            <h4>Order Quantity: {cart.length}</h4>
            {
                cart.map(tshirt =>
                    <p key={tshirt._id}>
                        {tshirt.name}
                        <button onClick={() => handelRemoveItem(tshirt)}>X</button>
                    </p>)
            }
        </div>
    );
};

export default Cart;