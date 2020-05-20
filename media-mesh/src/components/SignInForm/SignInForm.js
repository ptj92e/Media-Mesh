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
        API.signIn({
            email: emailRef.current.value,
            password: passRef.current.value
        }).then(res => {
            console.log(res);
        });
        // setSignInState({
        //     signIn: true
        // });
    };

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