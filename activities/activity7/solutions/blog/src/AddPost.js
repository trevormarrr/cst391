import React, { useState } from 'react';

const AddPost = (props) => {
    const [text, setText] = useState('');

    const handleTextChange = (event) => {
        setText(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(text);
        setText('');
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <textarea 
                    value={text}
                    onChange={handleTextChange}
                    rows="4"
                    cols="50"
                    placeholder="Enter your blog post here..."
                />
                <br />
                <button type="submit">Add Post</button>
            </form>
        </div>
    );
};

export default AddPost;