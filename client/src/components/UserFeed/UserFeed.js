import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import API from "../../utils/API";
import "./UserFeed.css";

function UserFeed(props) {
    //This contains all of the user's posts
    const [postState, setPostState] = useState([]);
    //This is incremented to make the component re-render
    let [deletePost, setDeletePost] = useState(0);
    //This useEffect is called to gather the user's posts
    useEffect(() => {
        getPosts(props.user.id);
    }, [props.user, props.count, deletePost]);
    //This collects the user's posts
    const getPosts = id => {
        API.userFeed(id)
            .then(res => {
                setPostState(res.data);
            });
    };
    //This makes a call to delete a post if the user wants to
    const handleDelete = e => {
        e.preventDefault();
        API.deletePost(e.target.id);
        setDeletePost(deletePost += 1);
    }

    return (
        <div id="userFeed">
            <ul>
                {
                    //This checks to see if the post has an image. If it does not, the first case is rendered. If it does, the second case is. 
                    postState.map(post =>
                        post.url === null ?
                            <li key={post.id}>
                                <div className="row">
                                    {
                                        post.User.picture === null ?
                                            <img className="userProfile" alt="profile" src="/images/picture.png" />
                                            :
                                            <img className="userProfile" alt="profile" src={post.User.picture} />
                                    }
                                    <p>{props.user.name}</p>
                                    <i onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.post}</p>
                                </div>
                                <CommentForm
                                    post={post}
                                    user={props.user}
                                />
                            </li>
                            :
                            <li key={post.id}>
                                <div className="row">
                                    {
                                        post.User.picture === null ?
                                            <img className="userProfile" alt="profile" src="/images/picture.png" />
                                            :
                                            <img className="userProfile" alt="profile" src={post.User.picture} />
                                    }
                                    <p>{props.user.name}</p>
                                    <i onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <img className="postImage" alt="post" src={post.url} />
                                    <p>{post.post}</p>
                                </div>
                                <CommentForm
                                    post={post}
                                    user={props.user}
                                />
                            </li>
                    )}
            </ul>
        </div>
    );
};

export default UserFeed;