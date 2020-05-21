import React from "react";
import Navbar from "../components/Navbar/Navbar";
import UserFeed from "../components/UserFeed/UserFeed";

function Home() {
    return(
        <div>
            <Navbar />
            <UserFeed />
        </div>
    )
}

export default Home;