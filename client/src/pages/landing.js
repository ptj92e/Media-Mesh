import React, { useState } from "react";
import Welcome from "../components/Welcome/Welcome";
import SignInForm from "../components/SignInForm/SignInForm";
import NewUserForm from "../components/NewUserForm/NewUserForm";
import About from "../components/About/About";
import "./css/landing.css";

function Landing() {
    const [newUserState, setNewUserState] = useState({
        newUser: false
    });

    const newUser = e => {
        e.preventDefault();
        setNewUserState({
            newUser: true
        });
    };

    const returningUser = e => {
        e.preventDefault();
        setNewUserState({
            newUser: false
        })
    }

    return(
        <div id="landing">
            <Welcome />
            {
            newUserState.newUser === false ?
            <div id="signIn">
                <div className="container">
                    <p>New user?</p><button onClick={newUser}>Create An Account</button>
                    <SignInForm />
                </div>
            </div>
            :
            <div id="newUser">
                <div className="container">
                    <p>Returning user?</p><button onClick={returningUser}>Sign In</button>
                    <NewUserForm />
                </div>
            </div>
            }
            <About />
        </div>
    )
}

export default Landing;