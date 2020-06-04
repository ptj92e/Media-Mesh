import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";
import "./SignInForm.css";

function SignInForm() {
    //These make references to the input fields for the users. 
    const emailRef = useRef();
    const passRef = useRef();
    //This determines which form renders to the page
    const [signInState, setSignInState] = useState({
        signIn: false
    });
    //This makes the call to login the user. If there is a response with a user, the user is redirected to the home page, if not, the user is alerted to the issue. 
    const handleSubmit = e => {
        e.preventDefault();
        API.signIn({
            email: emailRef.current.value,
            password: passRef.current.value
        }).then(res => {
            if (res.data.id) {
                setSignInState({
                    signIn: true
                });
            } else {
                alert("Username or password is incorrect");
            }
        });
    };
    //This determines which page is rendered depending on the signInState
    if (signInState.signIn === true) {
        return <Redirect to="/home" />;
    } else {
        return(
            <div>
                <form onSubmit={handleSubmit}>
                    <input required placeholder="E-Mail" ref={emailRef}/>
                    <input type="password" required placeholder="Password" ref={passRef}/>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        )
    }

}

export default SignInForm;