import React from 'react';
import Ornaments from '../Ornaments/Ornaments';

const Cosmetics = () => {
    const cosmetics = [
        {
            "id": "633272ede503c62e9b7eb166",
            "price": 108,
            "name": "Maura Rios"
        },
        {
            "id": "633272ed092e2fd56e4a3fe7",
            "price": 94,
            "name": "Celina Mcgee"
        },
        {
            "id": "633272ed5e6ad4eb46f30498",
            "price": 328,
            "name": "Luz Randall"
        },
        {
            "id": "633272ed8c225c9b5177e135",
            "price": 317,
            "name": "Carson Patton"
        },
        {
            "id": "633272ed453b433db7e274fa",
            "price": 321,
            "name": "Kelsey Winters"
        }
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