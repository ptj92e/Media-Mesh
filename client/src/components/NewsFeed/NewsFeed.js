import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./NewsFeed.css";

function NewsFeed() {
    const [userState, setUserState] = useState({});

    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
            });
    }, []);

    return(
        <div id="newsFeed">
            <ul>
                <li>
                    <div className="row">
                        <img className="userProfile" alt="profile" src="/images/nova.jpg"/>
                        <p>{userState.name}</p>
                        <i className="fas fa-trash-alt"></i>
                    </div>
                    <div>
                        <img className="postImage" alt="post" src="/images/nova.jpg"/>
                        <p>This is my dog Nova. She is really great and is very sweet.</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default NewsFeed;