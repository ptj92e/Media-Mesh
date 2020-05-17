import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./SignInForm.css";

function SignInForm() {
    const emailRef = useRef();
    const passRef = useRef();
    const [signInState, setSignInState] = useState({
        signIn: false
    });

    const handleSubmit = e => {
        e.preventDefault();
        API.signIn();
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
                    <input required placeholder="E-Mail" ref={emailRef}/>
                    <input required placeholder="Password" ref={passRef}/>
                    <button onClick={handleSubmit}>Sign In</button>
                </form>
            </div>
        )
    }

}

export default SignInForm;