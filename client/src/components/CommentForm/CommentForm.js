import React, { useRef, useState } from "react";
import Comments from "../Comments/Comments";
import "./CommentForm.css";
import API from "../../utils/API";

function CommentForm(props) {
    //This variable is set to make a reference to the textarea on the comment form.
    const commentRef = useRef();
    //This state is used to call the component to re-render when a new comment is made.
    let [newCount, setNewCount] = useState(0);
    //This handle submit makes a call to the API to create a new comment. Then the newCount is incrementd to call the commnents component to re-render with the new comment.
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