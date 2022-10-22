import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context ', user)

    const handelSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }
    // console.log(user)
    return (
        <div className="navbar bg-primary text-primary-content">
            <Link className="btn btn-ghost normal-case text-xl" to='/'>AuthRouterContext</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/order'>Order</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/login'>Login</Link>
            <Link className="btn btn-ghost normal-case text-xl" to='/registration'>Registration</Link>
            {user?.email && <span>{user.email}</span>}
            {
                user?.email ?
                    <button onClick={handelSignOut} className="btn btn-sm">Log Out</button>
                    :
                    <Link to='/login'><button className='btn btn-sm'>Log In</button></Link>
            }
        </div>
    );
};

export default Header;