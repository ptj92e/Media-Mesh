import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./UserFeed.css";

function UserFeed() {
    const [userState, setUserState] = useState({});
    const [postState, setPostState] = useState([]);

    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
                API.userFeed(res.data.id)
                    .then(res => {
                        setPostState(res.data);
                    });
            });
    }, []);

    return (
        <div id="userFeed">
            <ul>
                {
                    postState.map(post =>
                        // console.log(post)
                        post.url === null ?
                            <li key={post.id} id={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={userState.picture} />
                                    <p>{userState.name}</p>
                                    <i className="fas fa-trash-alt"></i>
                                </div>
                                <div>
                                    <h3>{post.title}</h3>
                                    <p>{post.post}</p>
                                </div>
                            </li>
                            :
                            <li key={post.id} id={post.id}>
                                <div className="row">
                                    <img className="userProfile" alt="profile" src={userState.picture} />
                                    <p>{userState.name}</p>
                                    <i className="fas fa-trash-alt"></i>
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

export default UserFeed;