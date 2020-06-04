import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import ProfileHead from "../components/ProfileHead/ProfileHead";
import NewPost from "../components/NewPost/NewPost";
import FriendList from "../components/FriendList/FriendList";
import Footer from "../components/Footer/Footer";
import API from "../utils/API";
import "./css/body.css";

function Body(props) {
    //signedInState determines if a user is authenticated to proceede to the website
    const [signInState, setSignInState] = useState({
        signedIn: true
    });
    //This is what we are using to store the user's information
    const [userState, setUserState] = useState({});
    //This useEffect is called when the component renders to see if the user is signed in. If they are not, the signIn state is set to false. 
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
    //If the user is not signed in, the app calls the Redirect component from react-router-dom to functionally redirect the user back to the landing page. 
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