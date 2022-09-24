import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Display from '../Display/Display';

const Watch = () => {
    const [steps, setSteps] = useState(0);

    const increaseSteps = () => {
        const newStepsCount = steps + 1
        setSteps(newStepsCount);
        // console.log(steps)
    }

    useEffect(() => {
        // console.log(steps)
    }, [steps])
    return (
        <div style={{ border: '2px solid teal', margin: '20px' }}>
            <h2>This is my Smart Watch</h2>
            <h3>My Current Steps: {steps}</h3>
            <button onClick={increaseSteps}>Go</button>
            <Display name="sazzad" steps={steps}></Display>

        </div>
    );
};

export default Watch;