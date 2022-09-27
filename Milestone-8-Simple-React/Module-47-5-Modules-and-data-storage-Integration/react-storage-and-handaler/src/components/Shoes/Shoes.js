import React from 'react';
import { add, multiply } from '../Utilities/Calculate';
// import add from '../Utilities/Calculate';

const Shoes = () => {
    const first = 30;
    const second = 20;
    const total = multiply(first, second);
    const result = add(first, second)

    return (
        <div>
            {/* <h1>This is shoes component</h1>
            <h2>Total: multiply-{total} and add-{result}</h2> */}
        </div>
    );
};

export default Shoes;