import React from "react";
import "./NavbarSearch.css";

function NavbarSearch() {
    return (
        <form id="navSearch" class="form-inline">
            <input class="form-control" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn" type="submit">Search</button>
        </form>
    )
}

export default NavbarSearch;