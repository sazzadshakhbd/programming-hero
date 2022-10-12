import React from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';

const Grandpa = () => {
    const house = 7;
    return (
        <div className='grandpa'>
            <h2>Grand pa Page</h2>
            <section className='flex'>
                <Father house={house}></Father>
                <Uncle house={house}></Uncle>
                <Unty house={house}></Unty>
            </section>
        </div>
    );
};

export default Grandpa;