import React from 'react';
import './Country.css'

const Country = (props) => {
    const { population, area, region, name, flags } = props.country
    // console.log(props.country)
    return (
        <div className='country py-3'>
            <h5 className='mb-4 mt-2'><strong>Country Name:</strong> {name.common}</h5>
            <img src={flags.png} alt="Flags" className='mb-3' />
            <p><strong>Population:</strong> {population}</p>
            <p><strong>Area:</strong> {area}</p>
            <p><strong>Region:</strong> {region}</p>
        </div>
    );
};

export default Country;