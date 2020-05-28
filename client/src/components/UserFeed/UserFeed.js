import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import Comments from "../Comments/Comments";
import API from "../../utils/API";
import "./UserFeed.css";

function UserFeed(props) {
    const [postState, setPostState] = useState([]);

    useEffect(() => {
        getPosts(props.user.id);
    }, [props.user]);

    const getPosts = id => {
        API.userFeed(id)
            .then(res => {
                setPostState(res.data);
            });
    };

    const handleDelete = e => {
        e.preventDefault();
        API.deletePost(e.target.id);
    }

    return (
        <div id="userFeed">
            <ul>
                {
                    postState.map(post =>
                        post.url === null ?
                            <li key={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={props.user.picture} />
                                    <p>{props.user.name}</p>
                                    <i onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.post}</p>
                                </div>
                                <CommentForm
                                    user={props.user}
                                />
                                <Comments 
                                    post={post.id}
                                    user={props.user}
                                />
                            </li>
                            :
                            <li key={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={props.user.picture} />
                                    <p>{props.user.name}</p>
                                    <i onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <img className="postImage" alt="post" src={post.url} />
                                    <p>{post.post}</p>
                                </div>
                                <CommentForm
                                    user={props.user}
                                />
                                <Comments 
                                    post={post.id}
                                    user={props.user}
                                />
                            </li>
                    )}
            </ul>
        </div>
    );
};

export default UserFeed;