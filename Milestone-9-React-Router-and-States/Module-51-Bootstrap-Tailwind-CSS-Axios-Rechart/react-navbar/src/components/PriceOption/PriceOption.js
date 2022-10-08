import React from 'react';
import Feature from '../Feature/Feature';

const PriceOption = ({ option }) => {
    const { features } = option;
    return (
        <div className='bg-indigo-100 m-3 text-center rounded-md p-3'>
            <div>
                <h3>
                    <span className='text-6xl font-bold'>{option.price}</span>
                    <span className='text-2xl text-gray-500'>/mon</span>
                </h3>
                <p className='text-3xl my-4'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature key={idx} feature={feature}></Feature>)
            }
            <button className='bg-white w-full rounded-md py-3 mt-5 text-indigo-400'>Buy Now</button>
        </div>
    );
};

export default PriceOption;