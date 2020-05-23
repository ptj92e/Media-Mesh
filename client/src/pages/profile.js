import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar";
import ProfileHead from "../components/ProfileHead/ProfileHead";
import Footer from "../components/Footer/Footer";

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
                <div className="container">
                    <ProfileHead />
                </div>
                <Footer />
            </div>
        );
    };
};

export default Profile;