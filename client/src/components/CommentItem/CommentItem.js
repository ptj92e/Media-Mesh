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
                        <li key={comment.id} className="comments">
                            <div className="row">
                            {
                                        comment.User.picture === null ?
                                            <img alt="profile" src="/images/picture.png" />
                                            :
                                            <img  alt="profile" src={comment.User.picture} />
                                    }
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