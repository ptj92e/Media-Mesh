import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import API from "../../utils/API";
import "./NewsFeed.css";

function NewsFeed(props) {
    const [postState, setPostState] = useState([]);
    let [deletePost, setDeletePost] = useState(0);

    useEffect(() => {
        getPosts();
    }, [props.count, deletePost]);

    const getPosts = () => {
        API.newsFeed()
            .then(res => {
                setPostState(res.data);
            });
    };

    const handleDelete = e => {
        e.preventDefault();
        if (props.user.id === parseInt(e.target.getAttribute("name"))) {
            API.deletePost(e.target.id);
            setDeletePost(deletePost += 1);
        } else {
            return;
        }
    };

    const addFriend = e => {
        e.preventDefault();
        if (props.user.id === JSON.parse(e.target.getAttribute("name"))) {
            return;
        } else {
            API.addFriend({
                userId: props.user.id,
                id: JSON.parse(e.target.getAttribute("name"))
            });
        }
    };

    return (
        <div id="newsFeed">
            <ul>
                {
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
                                    <p>{post.User.name}</p>
                                    <i
                                        name={post.User.id}
                                        onClick={addFriend}
                                        className="fas fa-user-friends"
                                    />
                                    <i
                                        name={post.User.id}
                                        onClick={handleDelete}
                                        id={post.id}
                                        className="fas fa-trash-alt"
                                    />
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
                                    <p>{post.User.name}</p>
                                    <i
                                        name={post.User.id}
                                        onClick={addFriend}
                                        className="fas fa-user-friends"
                                    />
                                    <i
                                        name={post.User.id}
                                        onClick={handleDelete}
                                        id={post.id}
                                        className="fas fa-trash-alt"
                                    />
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <img
                                        className="postImage" alt="post"
                                        src={post.url}
                                    />
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
export default NewsFeed;