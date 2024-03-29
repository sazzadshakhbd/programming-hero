import React from 'react';

const Card = ({ product }) => {
    return (
        <div className="card">
            <img src="..." className="card-img-top" alt="..."></img>
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
            </div>
        </div>
    );
};

export default Card;