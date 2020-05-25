import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./NewsFeed.css";

function NewsFeed() {
    const [userState, setUserState] = useState({});
    const [postState, setPostState] = useState([]);

    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
            });
        API.newsFeed()
            .then(res => {
                setPostState(res.data);
            });
    }, []);

    const handleDelete = e => {
        e.preventDefault();
        if (userState.id === parseInt(e.target.getAttribute("name"))) {
            API.deletePost(e.target.id);
        } else {
            return;
        }
    }

    return(
        <div id="newsFeed">
            <ul>
            {
                    postState.map(post =>
                        post.url === null ?
                            <li key={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={post.User.picture} />
                                    <p>{post.User.name}</p>
                                    <i name={post.User.id} onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.post}</p>
                                </div>
                            </li>
                            :
                            <li key={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={post.User.picture} />
                                    <p>{post.User.name}</p>
                                    <i name={post.User.id}onClick={handleDelete} id={post.id} className="fas fa-trash-alt"></i>
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