import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import UserFeed from "../components/UserFeed/UserFeed";
import API from "../utils/API";

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
                <UserFeed />
            </div>
        )
    };
};

export default Home;