import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center justify-center'>
            <CheckCircleIcon className='w-4 h-4 text-teal-500'></CheckCircleIcon>
            <p className='ml-2'>{feature}</p>
        </div>
    );
};

export default Feature;