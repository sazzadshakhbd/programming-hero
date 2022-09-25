import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = ({ product, handelAddToCart }) => {
    // console.log(props.product)
    // const { product, handelAddToCart } = props
    const { img, name, price, seller, ratings } = product

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
                    <button onClick={() => handelAddToCart(product)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default Product;