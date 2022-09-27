import React, { useEffect, useState } from 'react';
import Ornaments from '../Ornaments/Ornaments';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])
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