import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndCondition = () => {
    return (
        <div>
            <h3>Here is our terms and conditions</h3>
            <p>Go back to <Link className='text-decoration-none' to='/register'>Register</Link></p>
        </div>
    );
};

export default TermsAndCondition;