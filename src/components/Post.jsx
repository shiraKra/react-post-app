import styles from "./Post.module.css"
import { useState }  from "react";
import { useOutletContext } from "react-router";
import { NavLink } from "react-router";
import { useParams } from "react-router";
import{useNavigate, Outlet} from "react-router";

function Post() {
  const navigate = useNavigate();
  const { postid } = useParams();
  const { posts, handleEditContent, deletePost } = useOutletContext();
  const currentPost = posts?.[postid] ?? { title: "", body: "" };
  const { title, body } = currentPost;
  const [editContent, setEditContent] = useState(body);

  const handleInputChange = (event) => {
    setEditContent(event.target.value);
  };

  const handleSaveChange = () => {
    handleEditContent(postid, editContent);
    navigate("/posts");
  };

  const handleCancelEdit = () => {
    navigate("/posts");
  };

  const handleDeletePost = () => {
    deletePost(title);
    navigate("/posts");
  };

  const handleBackToPosts = () => {
    navigate("/posts");
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.name}>{title}</p>
      <p className={styles.content}>{body}</p>

      <div className={styles.actions}>
        <button className={styles.button} onClick={handleDeletePost}>
          Delete
        </button>
        <button className={styles.button} onClick={handleBackToPosts}>
          Back To Posts
        </button>
      </div>

      <label className={styles.field}>
        <span className={styles.label}>Edit content</span>
        <input
          className={styles.input}
          type="text"
          value={editContent}
          onChange={handleInputChange}
          placeholder="Edit post content"
        />
      </label>

      <div className={styles.actions}>
        <button className={styles.button} onClick={handleSaveChange}>
          Save
        </button>
        <button className={styles.button} onClick={handleCancelEdit}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Post;