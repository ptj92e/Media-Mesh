import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar";
import ProfileHead from "../components/ProfileHead/ProfileHead";

function Profile() {
    const [signInState, setSignInState] = useState({
        signedIn: true
    });

    useEffect(() => {
        API.userInfo()
            .then(res => {
                if (res.data === "") {
                    setSignInState({
                        signedIn: false
                    });
                } else {
                    return;
                }
            })
    }, []);

    if (signInState.signedIn === false) {
        return <Redirect to="/" />;   
    } else {
        return(
            <div>
                <Navbar />
                <ProfileHead />
            </div>
        );
    };
};

export default Profile;