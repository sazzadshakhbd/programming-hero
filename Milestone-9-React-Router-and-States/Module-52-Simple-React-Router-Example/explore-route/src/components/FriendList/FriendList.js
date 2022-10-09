import React from 'react';
import { Link } from 'react-router-dom';
import './FriendList.css';

const FriendList = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='friendList'>
            <h3> Name: {name}</h3>
            <p>Email: {email}</p>
            <p><small><Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default FriendList;