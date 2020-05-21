import React, { useState } from "react";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import "./Navbar.css";
import { Link, Redirect } from "react-router-dom";
import API from "../../utils/API";

function Navbar() {
    const [loginState, setLoginState] = useState({
        loggedIn: true
    });

    const handleClick = e => {
        e.preventDefault();
        API.signOut()
            .then(res => {
                if (res.data === "Signed Out") {
                    setLoginState({
                        loggedIn: false
                    })
                } else {
                    alert("You are not signed in.")
                }
            });
    };

    if (loginState.loggedIn === false) {
       return <Redirect to="/" />
    } else {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/home">Media Mesh</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <NavbarSearch />
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <Link to="/profile">Profile</Link>
                                <Link onClick={handleClick}>Logout</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    };
}
export default Navbar;