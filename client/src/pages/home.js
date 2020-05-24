import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ProfileHead from "../components/ProfileHead/ProfileHead";
import NewPost from "../components/NewPost/NewPost";
import FriendList from "../components/FriendList/FriendList";
import Footer from "../components/Footer/Footer";
import "./css/profile.css";
import NewsFeed from "../components/NewsFeed/NewsFeed";
import API from "../utils/API";
import "./css/home.css";

function Home() {
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
        return <Redirect to="/" />
    } else {
        return(
            <div>
                <Navbar />
                <div className="row" id="home">
                    <ProfileHead />
                    <div id="homeFeed">
                        <NewPost />
                        <NewsFeed />
                    </div>
                    <FriendList />
                </div>
                <Footer />
            </div>
        )
    };
};

export default Home;