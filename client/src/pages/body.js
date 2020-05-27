import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ProfileHead from "../components/ProfileHead/ProfileHead";
import NewPost from "../components/NewPost/NewPost";
import FriendList from "../components/FriendList/FriendList";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "./css/body.css";

function Body(props) {
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
            });
    }, []);

    if (signInState.signedIn === false) {
        return <Redirect to="/" />
    } else {
        return(
            <div>
                <div className="row" id="home">
                    <ProfileHead 
                        user={userState}
                    />
                    <div id="homeFeed">
                        <NewPost 
                            user={userState}
                            page={props.page}
                        />
                    </div>
                    <FriendList 
                        user={userState}
                    />
                </div>
                <Footer />
            </div>
        )
    };
};

export default Body;