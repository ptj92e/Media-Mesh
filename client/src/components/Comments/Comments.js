import React from "react";
import CommentItem from "../CommentItem/CommentItem";
import "./Comments.css";

function Comments(props) {
    return(
        <div>
            <ul>{
                    props.comments === undefined ?
                    <div></div>
                    :
                    <CommentItem
                        comment={props.comments}
                    />
                }
            </ul>
        </div>
    )
}

export default Comments;