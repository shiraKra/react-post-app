import './App.css';
import Post from './components/Post';
import AddPost from './components/AddPost';
import { useState } from 'react';

function App() {

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [posts, setPosts] = useState([
    { author: "Shira Krauss", content: "This is my very first React application!" },
    { author: "Alex Smith", content: "Learning how to use Props is quite interesting." },
    { author: "David Miller", content: "Don't forget the importance of Component Reuse." }
  ]);

  const handleEditPost = (index, newContent) => {

    setPosts((prevPost) => {
      const updatePosts = [...prevPost];
      updatePosts[index].content = newContent;

      return updatePosts;
    })
  };

  const handleLogPosts = () => {
    console.log("current post array:", posts);
  };

  const handleAddNewPostClick = () => {
    setIsFormOpen(true);
  }

const handleAddPost = (name, content) => {
  setPosts((prevPosts) => [
    { author: name, content: content }, 
    ...prevPosts
  ]);
  setIsFormOpen(false);
 
};

  const handleCancelAction = () => {
    setIsFormOpen(false);
  };


  const handleDeletePost = (index) => {
  setPosts((prevPosts) => {
    const updatedPosts = [...prevPosts];
    updatedPosts.splice(index, 1);
    return updatedPosts;
  });
};

  return (
    <>
      <button className="button" onClick={handleAddNewPostClick}>+Add Post</button>

      {posts.map((post, index) => (
        <Post key={index} author={post.author} content={post.content} onEdit={(newContent) => handleEditPost(index, newContent)} onDelete={() => handleDeletePost(index)}/>
      ))}

      <button className='button' onClick={handleLogPosts}>
        Log posts to console
      </button>

      {isFormOpen && (
        <>
          <div className="modalBackdrop" onClick={handleCancelAction} />
          <AddPost onAdd={handleAddPost} closeDialog={handleCancelAction} />
        </>
      )}
    </>

  );
}

export default App;