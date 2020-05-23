import React from "react";
import "./NavbarSearch.css";

function NavbarSearch() {
    return (
        <form id="navSearch" className="form-inline">
            <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn" type="submit">Search</button>
        </form>
    )
}

export default NavbarSearch;