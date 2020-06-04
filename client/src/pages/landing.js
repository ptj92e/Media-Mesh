import React, { useState } from "react";
import Welcome from "../components/Welcome/Welcome";
import SignInForm from "../components/SignInForm/SignInForm";
import NewUserForm from "../components/NewUserForm/NewUserForm";
import About from "../components/About/About";
import "./css/landing.css";

function Landing() {
    //This determines if the sign in form or the new user form is rendered on the page. It is set to false as a default to display the sign in form.
    const [newUserState, setNewUserState] = useState({
        newUser: false
    });
    //This sets the newUser state to true so that the new user form is rendered to the page
    const newUser = e => {
        e.preventDefault();
        setNewUserState({
            newUser: true
        });
    };
    //This sets the newUser state to false so that the sign in form is rendered
    const returningUser = e => {
        e.preventDefault();
        setNewUserState({
            newUser: false
        })
    }
    //This is what is being rendered to the page
    return(
        <div id="landing">
            <Welcome />
            {
            //This is a ternary operator that if the state is false, it renders the sign in form. If it is true, it renders the new user form.
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