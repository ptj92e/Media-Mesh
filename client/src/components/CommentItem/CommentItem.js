import React from "react";
import "./CommentItem.css";

function CommentItem(props) {
    return (
        <div>
            {
                props.comment === undefined ?
                    <div></div>
                    :
                    props.comment.map(comment =>
                        <li className="comments">
                            <div className="row">
                                <img alt="profile" src={comment.User.picture} />
                                <p>{comment.User.name}</p>
                            </div>
                            <p>{comment.comment}</p>
                        </li>
                    )
            }
        </div>
    )
}

export default CommentItem;