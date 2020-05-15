import React from "react";
import Welcome from "../components/Welcome/Welcome";
import SignInForm from "../components/SignInForm/SignInForm";
import About from "../components/About/About";

function Landing() {
    return(
        <div>
            <Welcome />
            <SignInForm />
            <About />
        </div>
    )
}

export default Landing;