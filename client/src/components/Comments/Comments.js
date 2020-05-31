import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./Comments.css";

function Comments(props) {
    return(
        <div>
            <ul>
                <CommentItem
                    user={props.user}
                    post={props.post}
                    comment={props.comments}
                />
            </ul>
        </div>
    )
}

export default Comments;