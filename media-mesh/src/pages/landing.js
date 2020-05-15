import React, { useState } from "react";
import Welcome from "../components/Welcome/Welcome";
import SignInForm from "../components/SignInForm/SignInForm";
import NewUserForm from "../components/NewUserForm/NewUserForm";
import About from "../components/About/About";

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
        <div>
            <Welcome />
            {
            newUserState.newUser === false ?
            <div>
                <SignInForm />
                <p>New user? <a onClick={newUser}>Click Me!</a></p>
            </div>
            :
            <div>
                <NewUserForm />
                <p>Returning user? <a onClick={returningUser}>Click Me!</a></p>
            </div>
            }
            <About />
        </div>
    )
}

export default Landing;