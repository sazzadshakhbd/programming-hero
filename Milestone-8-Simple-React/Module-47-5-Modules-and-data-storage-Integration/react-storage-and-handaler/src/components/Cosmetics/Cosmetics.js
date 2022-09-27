import React from 'react';
import Ornaments from '../Ornaments/Ornaments';

const Cosmetics = () => {
    const cosmetics = [
        { id: 1, name: 'kaner dul', price: 300 },
        { id: 2, name: 'nak ful', price: 100 },
        { id: 3, name: 'golar chain', price: 3000 },
        { id: 4, name: 'hater churi', price: 5000 },
        { id: 5, name: 'chuler fita', price: 30 },
    ]
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            {
                cosmetics.map(cosmetic => <Ornaments id={cosmetic.id} key={cosmetic.id} name={cosmetic.name} price={cosmetic.price}></Ornaments>)
            }
        </div>
    );
};

export default Cosmetics;