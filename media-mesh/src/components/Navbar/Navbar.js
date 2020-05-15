import React from "react";
import NavbarSearch from "../NavbarSearch/NavbarSearch";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {

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
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
            )
        }
export default Navbar;