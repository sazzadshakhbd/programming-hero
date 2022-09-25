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
            </div>
        </div>
    );
};

export default Product;