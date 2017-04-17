import React from 'react';
import './CommentsBox.css';

const CommentsBox = (comments) => {
  return(
    <div className="user-comments">
      {comments.comments.map((comment, index) => (
        <div className="comment-from-user" key={index}>
          <p className="author">
            {comment.user}
          </p>
          <p className="user-comment">
            {comment.text}
          </p>
        </div>
      ))}
    </div>
  );
}

export default CommentsBox;
