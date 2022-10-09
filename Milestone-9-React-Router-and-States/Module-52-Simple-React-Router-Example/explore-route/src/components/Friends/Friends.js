import React from 'react';
import { useLoaderData } from 'react-router-dom';
import FriendList from '../FriendList/FriendList';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends);
    return (
        <div>
            <h2>I have a friends {friends.length}</h2>
            {
                friends.map(friend => <FriendList key={friend.id} friend={friend}></FriendList>)
            }
        </div>
    );
};

export default Friends;