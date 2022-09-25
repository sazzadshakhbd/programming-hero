import React from 'react';
import './Product.css';

const Product = (props) => {
    // console.log(props.product)
    const { img, name, price, seller, ratings } = props.product
    return (
        <div className='card'>
            <div className="card-body">
                <div className='text-center'>
                    <img src={img} alt="Shoe" />
                </div>
                <div className="product-info">
                    <h2>{name}</h2>
                    <h3>Price: ${price}</h3>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
                <div className="cart-btn">
                    <button>Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default Product;