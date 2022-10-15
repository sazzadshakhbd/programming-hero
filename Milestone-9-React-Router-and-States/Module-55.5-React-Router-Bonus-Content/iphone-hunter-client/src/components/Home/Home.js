import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {
    const phones = useLoaderData();
    return (
        <div>
            <h3>Show me all the phones you have</h3>
            <h4>I got: {phones.length}</h4>
            {
                phones.map(ph => <li key={ph.id}><Link to={`/phones/${ph.id}`}>{ph.name}</Link></li>)
            }
        </div>
    );
};

export default Home;