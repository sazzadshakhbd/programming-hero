import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/products">Product</Link>
                <Link to="/friends">Friends</Link>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;