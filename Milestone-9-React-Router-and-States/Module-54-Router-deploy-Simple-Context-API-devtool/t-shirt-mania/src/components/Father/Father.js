import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister.js';

const Father = ({ house }) => {
    return (
        <div>
            <h2>Father Page</h2>
            <p><small>House: {house}</small></p>
            <section className='flex'>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister house={house}></Sister>
            </section>
        </div>
    );
};

export default Father;