import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./UserFeed.css";

function UserFeed() {
    const [userState, setUserState] = useState({});

    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
            });
    }, []);

    return(
        <div>
            <h1>Hello {userState.name}</h1>
        </div>
    );
};
export default UserFeed;