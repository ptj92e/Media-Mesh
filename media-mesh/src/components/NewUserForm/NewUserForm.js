import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./NewUserForm.css";

function NewUserForm() {
    const [signInState, setSignInState] = useState({
        signIn: false
    });

    const handleSubmit = e => {
        e.preventDefault();
        setSignInState({
            signIn: true
        });
    };

    if (signInState.signIn === true) {
        return <Redirect to="/home" />;
    } else {
        return(
            <div>
                <h1>New User</h1>
                <button onClick={handleSubmit}>Create Account</button>
            </div>
        )
    }
}

export default NewUserForm;