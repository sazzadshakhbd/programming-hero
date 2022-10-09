import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const { id, title, body, userId } = post;

    const navigate = useNavigate();

    const handelNavigate = () => {
        navigate(`/friend/${userId}`)
    }
    return (
        <div>
            <h2>This is Post Details Page {id}</h2>
            <h3>{title}</h3>
            <p>{body}</p>
            <button onClick={handelNavigate}>Get the authors</button>
        </div>
    );
};

export default PostDetails;