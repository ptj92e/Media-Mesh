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
            <h1>{userState.name}</h1>
            <h1>{userState.artform}</h1>
        </div>
    );
};
export default ProfileHead;