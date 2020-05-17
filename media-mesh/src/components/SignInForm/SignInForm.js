import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./SignInForm.css";

function SignInForm() {
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
                <form>
                    <input required placeholder="E-Mail"/>
                    <input required placeholder="Password"/>
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }

}

export default SignInForm;