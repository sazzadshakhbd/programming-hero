import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
            <h2>This is friend details page</h2>
            <h3>Name: {friend.name}</h3>
            <h4>Phone: {friend.phone}</h4>
        </div>
    );
};

export default FriendDetails;