import React from 'react';
import './ReveiwItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
const ReveiwItem = ({ product }) => {
    const { name, price, quantity, img, shipping } = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-details-container">
                <div className="review-details">
                    <p>{name}</p>
                    <p>Price: <small>${price}</small></p>
                    <p>Shipping: <small>${shipping}</small></p>
                    <p>Quantity: <small>{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button className='btn-delete'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>

    );
};

export default ReveiwItem;