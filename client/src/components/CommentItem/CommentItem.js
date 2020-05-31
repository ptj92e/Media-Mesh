import React from "react";
import API from "../../utils/API";
import "./CommentItem.css";

function CommentItem(props) {
    const handleDelete = e => {
        e.preventDefault();
        if (props.user.id === parseInt(e.target.getAttribute("name")) || props.post.UserId === props.user.id) {
            API.deleteComment({
                id: e.target.id
            });
        } else {
            return;
        }
    }

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
                                <i 
                                    id={comment.id}
                                    name={comment.UserId}
                                    onClick={handleDelete}
                                    className="fas fa-trash-alt"
                                />
                            </div>
                            <p>{comment.comment}</p>
                        </li>
                    )
            }
        </div>
    )
}

export default CommentItem;