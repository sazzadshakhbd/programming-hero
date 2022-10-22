import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user } = useContext(AuthContext);
    // console.log(user)
    return (
        <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>AuthRouterContext</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/registration'>Registration</Link>
            {user.email && <span>{user.email}</span>}
            <button className="btn btn-sm">Small</button>
        </div>
    );
};

export default Header;