import React, { useRef } from "react";
import "./CommentForm.css";
import API from "../../utils/API";

function CommentForm(props) {
    const commentRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        API.newComment({
            postId: props.post,
            userId: props.user.id,
            comment: commentRef.current.value
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
        </div>
    )
}

export default CommentForm;