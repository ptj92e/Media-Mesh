import React, { useRef } from "react";
import API from "../../utils/API";
import "./NewUserForm.css";

function NewUserForm() {
    //These refer to the different input fields to create a new user.
    const nameRef = useRef();
    const emailRef = useRef();
    const passRef = useRef();
    const confirmRef = useRef();
    const artRef = useRef();
    //If the passwords do not match, an alert appears on the screen. If they do, a new user is made if the email is not in use. 
    const handleSubmit = e => {
        e.preventDefault();
        if (passRef.current.value === confirmRef.current.value) {
            API.newUser({
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passRef.current.value,
                artform: artRef.current.value
            }).then(res => {
                if (res.data === "Email in Use") {
                    alert("Email Already In Use");
                } else {
                    return window.location.reload();
                }
            });
        } else {
            alert("The password fields must match.");
        }
    };

    return (
        <div>
            <form id="newForm" onSubmit={handleSubmit}>
                <div className="row">
                    <input required placeholder="Full Name" ref={nameRef} />
                    <input required placeholder="E-Mail" ref={emailRef} />
                </div>
                <div className="row">
                    <input type="password" required placeholder="Password" ref={passRef} />
                    <input type="password" required placeholder="Confirm Password" ref={confirmRef} />
                </div>
                <div className="row">
                    <select className="custom-select" ref={artRef}>
                        <option defaultValue>Choose an Artform</option>
                        <option value="Animation">Animation</option>
                        <option value="Architecture">Architecture</option>
                        <option value="Cinema">Cinema</option>
                        <option value="Dance">Dance</option>
                        <option value="Digital Art">Digital Art</option>
                        <option value="Drawing">Drawing</option>
                        <option value="Engraving">Engraving</option>
                        <option value="Knitting">Knitting</option>
                        <option value="Music">Music</option>
                        <option value="Painting">Painting</option>
                        <option value="Photography">Photography</option>
                        <option value="Poetry">Poetry</option>
                        <option value="Sculpture">Sculpture</option>
                        <option value="Sewing">Sewing</option>
                        <option value="Singing">Singing</option>
                        <option value="Theatre">Theatre</option>
                        <option value="Web Design">Web Design</option>
                        <option value="Woodwork">Woodwork</option>
                        <option value="Writing">Writing</option>
                    </select>
                </div>
                <button type="submit">Create Account</button>
            </form>
        </div>
    );
};

export default NewUserForm;