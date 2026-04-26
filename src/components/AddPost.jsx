import React, { useState } from 'react';
import styles from './AddPost.module.css';

function AddPost({ onAdd, closeDialog }) {
  const [authorName, setAuthorName] = useState("");
  const [postContent, setPostContent] = useState("");

  const handleAuthorChange = (event) => {
    setAuthorName(event.target.value);
  };

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };
const handleSubmit = (event) => {
  event.preventDefault();
   
  onAdd(authorName, postContent); 
  setAuthorName("");
  setPostContent("");
  closeDialog();
};

  

  return (
    <form className={styles.modal} onSubmit={handleSubmit}>
      <h2 className={styles.title}>Add New Post</h2>

      <div className={styles.formGroup}>
        <label htmlFor="name">Author Name:</label>
        <input
          id="name"
          type="text"
          placeholder="Enter author name"
          className={styles.input}
          autoFocus
          value={authorName}
          onChange={handleAuthorChange}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="body">Post Content:</label>
        <textarea
          id="body"
          rows={3}
          placeholder="Enter post content"
          className={styles.input}
          value={postContent}
          onChange={handlePostContentChange}
        />
      </div>

      <div className={styles.actions}>
        <button type="submit" className={styles.submitBtn}>
          Create Post
        </button>
        <button type="button" className={styles.cancelBtn} onClick={ closeDialog}>
          Cancel
        </button>
      </div>
    </form>
  );
}

export default AddPost;