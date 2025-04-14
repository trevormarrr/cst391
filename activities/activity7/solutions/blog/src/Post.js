import React from "react";
import './Post.css';

const Post = (props) => {
    const handleDelete = () => {
        props.onDelete(props.id);
    };

    return (
        <div className='post-container'>
            <span> Blog entry # {props.id}</span>
            <p>{props.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Post;