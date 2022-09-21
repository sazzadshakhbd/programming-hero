import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <ul className="nav justify-content-center bg-dark p-3">
                <li className="nav-item">
                    <a className="nav-link text-white active" aria-current="page" href="/home">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/countries">Countries</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-white" href="/about">About</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;