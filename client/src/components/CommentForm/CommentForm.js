import React, { useRef } from "react";
import "./CommentForm.css";

function CommentForm(props) {
    const commentRef = useRef();
    const handleSubmit = e => {
        e.preventDefault();
        console.log("Yay");
    };

    return(
        <div id="commentForm">
            <form onSubmit={handleSubmit}>
                <textarea
                    id="comment"
                    ref={commentRef}
                />
                <button type="submit" id={props.user.id}>Comment</button>
            </form>
        </div>
    )
}

export default CommentForm;