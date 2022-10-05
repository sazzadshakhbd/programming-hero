import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        { id: 1, name: 'Mac book pro', price: 143400 },
        { id: 2, name: 'Mac book crow', price: 153400 },
        { id: 3, name: 'Mac book grow', price: 1439800 }
    ]
    return (
        <div className="card-group">
            {
                products.map(product => <Card key={product.id} product={product}></Card>)
            }
        </div>
    );
};

export default CardGroup;