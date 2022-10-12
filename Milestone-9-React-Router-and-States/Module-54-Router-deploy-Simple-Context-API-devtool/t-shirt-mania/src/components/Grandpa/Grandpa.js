import React, { createContext, useState } from 'react';
import './Grandpa.css';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Unty from '../Unty/Unty';

export const RingContext = createContext('Matir Ring')
export const MoneyContext = createContext(555)

const Grandpa = () => {
    const [house, setHouse] = useState(1);
    const [money, setMoney] = useState(555);
    const ring = 'Diamond Ring';
    return (
        <RingContext.Provider value={[house, setHouse]}>
            <MoneyContext.Provider value={money}>
                <div className='grandpa'>
                    <h2>Grand pa Page</h2>
                    <section className='flex'>
                        <Father house={house} ring={ring}></Father>
                        <Uncle house={house}></Uncle>
                        <Unty house={house}></Unty>
                    </section>
                </div>
            </MoneyContext.Provider>
        </RingContext.Provider>
    );
};

export default Grandpa;