import React, { useState } from "react";
// import NavbarSearch from "../NavbarSearch/NavbarSearch";
import Body from "../../pages/body";
import "./Navbar.css";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

function Navbar() {
    //This is set to true to see if the user is logged in
    const [loginState, setLoginState] = useState({
        loggedIn: true
    });
    //This checks to see which page is rendered
    const [pageState, setPageState] = useState({
        page: "Home"
    });
    //Once this is clicked, the user is logged out and the session they are on expires. Logged in state is then set to false to redirect them to the landing page
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
    //This redirects users to the landing page once they log out
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
                            {/* <NavbarSearch /> */}
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