import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css';

const Post = ({ post }) => {
    const { id, title, body } = post;
    const navigate = useNavigate();
    const handelPost = () => {
        // console.log('saz')
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h2>{title}</h2>
            <p><small>{body}</small></p>
            <Link to={`/post/${id}`}>Visit: {id}</Link>
            <Link to={`/post/${id}`}><button>Post Details</button></Link>
            <button onClick={handelPost}>Post Details-2</button>
        </div>
    );
};

export default Post;