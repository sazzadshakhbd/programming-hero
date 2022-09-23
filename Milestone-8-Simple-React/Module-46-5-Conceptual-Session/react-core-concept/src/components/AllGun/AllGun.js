import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ countIncrease }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/mir-hussain/guns/main/data.json')
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    return (
        <div>
            <h2 className='text-4xl text-center font-bold mt-10 mb-5'>Welcome to GunStore</h2>
            <p className='text-center mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam soluta placeat, neque labore ipsa doloribus eos voluptatem natus, fugit eveniet adipisci velit aliquam molestiae cumque animi rerum necessitatibus veritatis assumenda.</p>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 w/90 mx-auto'>
                {
                    guns.map(gun => <SingleGun key={gun.id} gun={gun} countIncrease={countIncrease}></SingleGun>)
                }
            </div>
        </div>
    );
};

export default AllGun;