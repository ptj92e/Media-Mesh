import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./ProfileHead.css";

function ProfileHead() {
    const [userState, setUserState] = useState({});

    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
            });
    }, []);

    return(
        <div id="profileInfo">
            <img alt="profile" src="/images/nova.jpg"/>
            <h3>{userState.name}</h3>
            <p>{userState.artform}</p>
        </div>
    );
};
export default ProfileHead;