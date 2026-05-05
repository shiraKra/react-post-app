import { useOutletContext } from "react-router";
import Post from './Post'
import{useNavigate, Outlet} from "react-router";
import styles from "./PostList.module.css";

function PostList() {
  const { posts, isLoading, error } = useOutletContext();
  const navigate = useNavigate();

  function handleClick(index) {
    navigate(`/posts/${index}`);
  }

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <div className={styles.list}>
          {posts.map((post, index) => (
            <article
              onClick={() => handleClick(index)}
              key={post.id ?? index}
              className={styles.card}
            >
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </article>
          ))}
        </div>
      )}
    </>
  );
}

export default PostList;