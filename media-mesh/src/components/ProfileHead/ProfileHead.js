import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./ProfileHead.css";

function ProfileHead() {
    const [userState, setUserState] = useState({});

    useEffect(() => {
        API.checkSignIn()
            .then(res => {
                setUserState(res.data)
            });
    }, []);

    return(
        <div>
            <h1>Hello {userState.name}</h1>
            <h1>{userState.artform}</h1>
        </div>
    );
};
export default ProfileHead;