import React, { useState } from "react";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import Body from "../../pages/body";
import "./Navbar.css";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function Navbar() {
    const [loginState, setLoginState] = useState({
        loggedIn: true
    });
    const [pageState, setPageState] = useState({
        page: "Home"
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
                <div>
                    <nav className="navbar navbar-expand-md">
                        <div className="container">

                            <button onClick={() => {
                                setPageState({
                                    page: "Home"
                                });
                            }}><img alt="Media Mesh" src="/images/NavLogo.png" /></button>
                            <NavbarSearch />
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <i className="fas fa-sliders-h fa-lg"></i>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <button onClick={() => {
                                            setPageState({
                                                page: "Profile"
                                            });
                                        }}>Profile</button>
                                        <a href="#" onClick={handleClick}>Logout</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <Body 
                    page={pageState}
                />
            </div>
        );
    };
}
export default Navbar;