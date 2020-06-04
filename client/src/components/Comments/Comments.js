import React, { useEffect, useState } from "react";
import "./Comments.css";
import API from "../../utils/API";

function Comments(props) {
    //This state stores the comments for each post
    const [comments, setComments] = useState();
    //This is also incrementd to call the component to re-render with the correct comments
    let [deleteComment, setDeleteComment] = useState(0);
    //This useEffect is called to reset the comments for each post.
    useEffect(() => {
        getComments(props.post.id);
    }, [props.count, deleteComment]);
    //This function gets the comments and sets the comment state. 
    const getComments = id => {
        API.getComments(id)
            .then(res => {
                setComments(res.data);
            });
    };
    //This handle delete makes a call to the API to delete the comment. If the comment does not belong to the user, or if the post the comment belongs to belongs to the user, the comment is deleted. If it isn't nothing happens.
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
                //If there are no comments, nothing renders. If there are comments, the comments state is mapped over for each comment in the state for that post. 
                comments === undefined ?
                    <div></div>
                    :
                    comments.map(comment =>
                        <li key={comment.id} className="comments">
                            <div className="row">
                            {
                                        //This checks to see if the user the comment belongs to has a picture or not. If they don't there is a stock picture that is used. 
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