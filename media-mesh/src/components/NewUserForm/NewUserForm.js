import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import "./NewUserForm.css";

function NewUserForm() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const confirmRef = useRef();
    const artRef = useRef();
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
                <form id="newForm">
                    <div className="row">
                        <input required placeholder="Full Name" ref={nameRef}/>
                        <input required placeholder="E-Mail" ref={emailRef}/>
                    </div>
                    <div className="row">
                        <input type="password" required placeholder="Password" ref={passRef}/>
                        <input type="password" required placeholder="Confirm Password" ref={confirmRef}/>
                    </div>
                    <div className="row">
                        <select class="custom-select" ref={artRef}>
                            <option selected>Choose an Artform</option>
                            <option value="Animation">Animation</option>
                            <option value="Architecture">Architecture</option>
                            <option value="Cinema">Cinema</option>
                            <option value="Dance">Dance</option>
                            <option value="Digital Art">Digital Art</option>
                            <option value="Drawing">Drawing</option>
                            <option value="Engraving">Engraving</option>
                            <option value="Music">Music</option>
                            <option value="Painting">Painting</option>
                            <option value="Photography">Photography</option>
                            <option value="Poetry">Poetry</option>
                            <option value="Sculpture">Sculpture</option>
                            <option value="Singing">Singing</option>
                            <option value="Theatre">Theatre</option>
                            <option value="Web Design">Web Design</option>
                            <option value="Woodwork">Woodwork</option>
                            <option value="Writing">Writing</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit}>Create Account</button>
                </form>
            </div>
        )
    }
}

export default NewUserForm;