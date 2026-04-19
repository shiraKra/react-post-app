import React, { useState } from 'react';
import styles from './Post.module.css';

function Post({ author, content = "" }) {
    const [postContent, setPostContent] = useState(content);

    const handleInputChange = (event) => {
        setPostContent(event.target.value);
    };

    return (
        <div className={styles.postCard}>
            <p className={styles.authorName}>{author}</p>
            <p className={styles.postContent}>{postContent}</p>

            <input 
                type="text" 
                value={postContent} 
                onChange={handleInputChange}  
                placeholder="ערוך את תוכן הפוסט"
                className={styles.editInput} 
            />
        </div>
    );
}

export default Post;