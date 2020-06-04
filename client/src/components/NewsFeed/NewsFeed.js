import React, { useState, useEffect } from "react";
import CommentForm from "../CommentForm/CommentForm";
import API from "../../utils/API";
import "./NewsFeed.css";

function NewsFeed(props) {
    const [postState, setPostState] = useState([]);
    //This is increments to call the component to re-render
    let [deletePost, setDeletePost] = useState(0);
    //This useEffect is used to get each post and render them to the page.
    useEffect(() => {
        getPosts();
    }, [props.count, deletePost]);
    //This gets the posts and sets them to the postState
    const getPosts = () => {
        API.newsFeed()
            .then(res => {
                setPostState(res.data);
            });
    };
    //This deletes a post if the post belongs to the user. If it doesn't, nothing happens. If it does, the component is re-rendered with the correct posts. 
    const handleDelete = e => {
        e.preventDefault();
        if (props.user.id === parseInt(e.target.getAttribute("name"))) {
            API.deletePost(e.target.id);
            setDeletePost(deletePost += 1);
        } else {
            return;
        }
    };
    //This is where you can add friends to your friend list. If the user tried to make friends with themselves, they cannot. 
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
                    //If the post does not have a picture, the first case is rendered. If it does, the second case is rendered.
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