import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='header'>
                {/* <a href="/home">Home</a>
            <a href="/about">About</a> */}
                <NavLink to="/home" className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/products">Product</NavLink>
                <NavLink to="/friends">Friends</NavLink>
                <NavLink to="/posts">Posts</NavLink>
            </nav>
            <p>Common Header</p>
        </div>
    );
};

export default Header;