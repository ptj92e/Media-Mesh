import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar/Navbar";
import ProfileHead from "../components/ProfileHead/ProfileHead";
import NewPost from "../components/NewPost/NewPost";
import UserFeed from "../components/UserFeed/UserFeed";
import FriendList from "../components/FriendList/FriendList";
import Footer from "../components/Footer/Footer";
import "./css/profile.css";

function Profile() {
    const [signInState, setSignInState] = useState({
        signedIn: true
    });
    const [userState, setUserState] = useState({});

    useEffect(() => {
        API.userInfo()
            .then(res => {
                if (res.data === "") {
                    setSignInState({
                        signedIn: false
                    });
                } else {
                    setUserState(res.data);
                }
            })
    }, []);

    if (signInState.signedIn === false) {
        return <Redirect to="/" />;   
    } else {
        return(
            <div>
                <Navbar />
                <div className="row" id="profile">
                    <ProfileHead />
                    <div id="profileFeed">
                        <NewPost 
                            user={userState}
                        />
                        <UserFeed />
                    </div>
                    <FriendList />
                </div>
                <Footer />
            </div>
        );
    };
};

export default Profile;