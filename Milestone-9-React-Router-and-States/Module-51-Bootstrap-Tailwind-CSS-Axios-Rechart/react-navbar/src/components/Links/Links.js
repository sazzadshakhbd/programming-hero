import React from 'react';

const Links = ({ route }) => {
    return (
        <li className='md:mr-12'>
            <a href={route.path} className="text-white">{route.name}</a>
        </li>
    );
};

export default Links;