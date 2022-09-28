import React, { useEffect, useState } from 'react';
import Ornaments from '../Ornaments/Ornaments';
import { getTotal } from '../Utilities/Calculate';

const Cosmetics = () => {
    const [cosmetics, setCosmetics] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, [])

    const total = getTotal(cosmetics)
    return (
        <div>
            <h1>Welcome to my cosmetics store</h1>
            <p>Money needed : {total}</p>
            {
                cosmetics.map(cosmetic => <Ornaments id={cosmetic.id} key={cosmetic.id} name={cosmetic.name} price={cosmetic.price}></Ornaments>)
            }
        </div>
    );
};

export default Cosmetics;