import React, { useEffect, useState } from "react";
import "./Comments.css";
import API from "../../utils/API";

function Comments(props) {
    const [comments, setComments] = useState();
    let [deleteComment, setDeleteComment] = useState(0);

    useEffect(() => {
        getComments(props.post.id);
    }, [props.count, deleteComment]);

    const getComments = id => {
        API.getComments(id)
            .then(res => {
                setComments(res.data);
            });
    };

    const handleDelete = e => {
        e.preventDefault();
        if (props.user.id === parseInt(e.target.getAttribute("name")) || props.post.UserId === props.user.id) {
            API.deleteComment({
                id: e.target.id
            });
            setDeleteComment(deleteComment += 1);
        } else {
            return;
        }
    };

    return(
        <div>
            <ul>
            {
                comments === undefined ?
                    <div></div>
                    :
                    comments.map(comment =>
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
            </ul>
        </div>
    )
}

export default Comments;