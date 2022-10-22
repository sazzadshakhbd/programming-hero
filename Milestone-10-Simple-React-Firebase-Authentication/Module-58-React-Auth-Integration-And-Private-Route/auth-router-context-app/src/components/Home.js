import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h2>Home Page User Name {user?.displayName}</h2>
        </div>
    );
};

export default Home;