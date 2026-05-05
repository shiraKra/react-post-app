
import { Outlet, NavLink } from "react-router";
import { useState, useEffect } from "react";
import styles from "./Posts.module.css";

function Posts() {
  const [posts, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  }, []);

  const handleLogPosts = () => {
    console.log(posts);
  };

  const handleEditContent = (index, newcontent) => {
    setPost((post) => {
      const updateposts = [...post];
      updateposts[index] = { ...updateposts[index], body: newcontent };
      return updateposts;
    });
  };

  const onAdd = (title, body) => {
    setPost((prevpost) => [...prevpost, { title, body }]);
  };

  const deletePost = (title) => {
    const updatedPosts = posts.filter((post) => post.title !== title);
    setPost(updatedPosts);
  };

  return (
    <div className={styles.container}>
      <div className={styles.actions}>
        <button className={styles.button} onClick={handleLogPosts}>
          Log posts to console
        </button>
        <NavLink className={styles.button} to="new">
          Add New Post
        </NavLink>
      </div>

      <Outlet
        context={{
          posts,
          isLoading,
          error,
          handleEditContent,
          deletePost,
          onAdd,
        }}
      />
    </div>
  );
}

export default Posts;