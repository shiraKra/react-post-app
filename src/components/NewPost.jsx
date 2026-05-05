import { useState } from "react";
import { useOutletContext } from "react-router";
import { useNavigate } from "react-router";
import styles from "./NewPost.module.css";
function NewPost(){
    const navigate = useNavigate();
    const { onAdd } = useOutletContext();
    const  [authorname, setauthorname]=useState("");
    const[postcontent,setpostcontent]=useState("");

  const handleAuthorChange = (event) => {
    setauthorname(event.target.value);
  };

  const handleContentChange = (event) => {
    setpostcontent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd(authorname, postcontent);
    setauthorname("");
    setpostcontent("");
    navigate("/posts");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    setauthorname("");
    setpostcontent("");
    navigate("/posts");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <h2 className={styles.title}>New Post</h2>

      <label className={styles.field} htmlFor="name">
        <span className={styles.label}>Author name</span>
        <input
          className={styles.input}
          id="name"
          type="text"
          placeholder="Enter author name"
          value={authorname}
          onChange={handleAuthorChange}
        />
      </label>

      <label className={styles.field} htmlFor="content">
        <span className={styles.label}>Post Content</span>
        <textarea
          className={styles.textarea}
          id="content"
          rows={4}
          placeholder="Post your content"
          value={postcontent}
          onChange={handleContentChange}
        />
      </label>

      <div className={styles.actions}>
        <button className={styles.button} type="submit">
          Submit
        </button>
        <button
          className={`${styles.button} ${styles.cancel}`}
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

export default NewPost;