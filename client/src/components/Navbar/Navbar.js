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
                console.log(res);
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

                        <Link to="/home"><img alt="Media Mesh" src="/images/NavLogo.png" /></Link>
                        <NavbarSearch />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-sliders-h fa-lg"></i>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/profile">Profile</Link>
                                    <a href="#" onClick={handleClick}>Logout</a>
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