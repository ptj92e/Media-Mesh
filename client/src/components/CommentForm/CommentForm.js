import React, { useRef, useState } from "react";
import Comments from "../Comments/Comments";
import "./CommentForm.css";
import API from "../../utils/API";

function CommentForm(props) {
    const commentRef = useRef();
    let [newCount, setNewCount] = useState(0);

    const handleSubmit = e => {
        e.preventDefault();
        API.newComment({
            postId: props.post.id,
            userId: props.user.id,
            comment: commentRef.current.value
        }).then(() => {
            commentRef.current.value = "";
            setNewCount(newCount += 1);
        });
    };

    return(
        <div id="commentForm">
            <form onSubmit={handleSubmit}>
                <textarea
                    required
                    id="comment"
                    ref={commentRef}
                />
                <button type="submit" id={props.user.id}>Comment</button>
            </form>
            <Comments
                count={newCount} 
                post={props.post}
                user={props.user}
            />
        </div>
    )
}

export default CommentForm;