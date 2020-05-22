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
                if (res.status === 200) {
                    setLoginState({
                        loggedIn: false
                    });
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
                <nav className="navbar navbar-expand-md">
                    <div className="container">

                        <Link to="/home"><img alt="Media Mesh" src="../static/react/NavLogo.png" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <NavbarSearch />

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/profile">Profile</Link>
                                    <Link onClick={handleClick}>Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    };
}
export default Navbar;