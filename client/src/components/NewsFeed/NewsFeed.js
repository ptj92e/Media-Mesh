import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./NewsFeed.css";

function NewsFeed(props) {
    const [postState, setPostState] = useState([]);

    useEffect(() => {
        getPosts();
    }, []);

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
            getPosts();
        } else {
            return;
        }
    };

    const addFriend = e => {
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
                                    <img 
                                        className="userProfile" alt="profile" 
                                        src={post.User.picture} 
                                    />
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
                            </li>
                            :
                            <li key={post.id}>
                                <div className="row">
                                    <img 
                                        className="userProfile" alt="profile" 
                                        src={post.User.picture} 
                                    />
                                    <p>{post.User.name}</p>
                                    <i 
                                        name={post.User.id}
                                        onCLick={addFriend}
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
                                    <img className="postImage" alt="post" src={post.url} />
                                    <p>{post.post}</p>
                                </div>
                            </li>
                    )}
            </ul>
        </div>
    );
};
export default NewsFeed;