import React, { useState } from 'react';
import styles from './Post.module.css';

function Post({ author, content = "" , onEdit, onDelete}) {
 
    const [editAbleContent, setEditAbleContent]=useState(content);
    const[isEditing, setIsEditing ]= useState(false);

    const handleInputChange = (event) => {
        setEditAbleContent(event.target.value);
    };
    const handleEditClick=(event)=>{
        setIsEditing(true);
    }
  
    const handleCencleClick=(event)=>{
        setIsEditing(false);
        setEditAbleContent(content);
    }
    const handleSaveClick=(event)=>{
        onEdit(editAbleContent);
        setIsEditing(false);
    }
    return (
        <div className={styles.postCard}>
            <p className={styles.authorName}>{author}</p>
            <p className={styles.postContent}>{content}</p>

          {!isEditing ? ( 
            <div className={styles.buttenGrup}>
                <button className={styles.button + " " + styles.buttonEdit} onClick={handleEditClick}>
                    Edit
                </button>
             
                <button className={styles.button + " " + styles.buttonDelete} onClick={onDelete}>
                    Delete
                </button>
            </div>
          ) : null}

           {isEditing ? (
            <div className={styles.editSection}>
                <input 
                    type="text" 
                    value={editAbleContent} 
                    onChange={handleInputChange}  
                    placeholder="ערוך את תוכן הפוסט"
                    className={styles.editInput} 
                />
                <div className={styles.buttenGrup}>
                    <button className={styles.button + " " + styles.buttonSave} onClick={handleSaveClick}>
                        Save
                    </button>
                    <button className={styles.button + " " + styles.buttonCancel} onClick={handleCencleClick}>
                        Cencel  
                    </button>
                </div>
            </div> 
           ) : null}
        </div>
    );
}

export default Post;