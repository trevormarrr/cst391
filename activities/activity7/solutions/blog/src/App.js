import React, { useState } from 'react';
import Post from './Post';
import AddPost from './AddPost';

function App() {
  const [postList, setPostList] = useState([
    {
      postNumber: 0,
      text: 'A short psychic broke out of jail. She was a small medium at large.',
    },
    {
      postNumber: 1,
      text: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
    },
    {
      postNumber: 2,
      text: 'What do you call a bear with no teeth? A gummy bear!',
    },
    {
      postNumber: 3,
      text: "Why don't scientists trust atoms? Because they make up everything!",
    }
  ]);
  const [postId, setPostId] = useState(4);

  const handleDelete = (postId) => {
    const updatedPosts = postList.filter(post => post.postNumber !== postId);
    setPostList(updatedPosts);
  };

  const handleAddPost = (text) => {
    const newPost = {
      postNumber: postId,
      text: text
    };
    setPostList([...postList, newPost]);
    setPostId(postId + 1);
  };

  return (
    <div>
      <AddPost onSubmit={handleAddPost} />
      {postList.map(post => (
        <Post 
          key={post.postNumber} 
          text={post.text} 
          id={post.postNumber}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default App;