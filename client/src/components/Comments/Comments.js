import React from "react";
import "./Comments.css";

function Comments(props) {
    return(
        <div>
            <ul>
                <li className="comments">
                    <div className="row">
                        <img alt="profile" src={props.user.picture}/>
                        <p>Phillip Jones</p>
                    </div>
                    <p>That looks really great!!</p>
                </li>
                <li className="comments">
                    <div className="row">
                        <img alt="profile" src={props.user.picture}/>
                        <p>Phillip Jones</p>
                    </div>
                    <p>That looks really great!!</p>
                </li>
                <li className="comments">
                    <div className="row">
                        <img alt="profile" src={props.user.picture}/>
                        <p>Phillip Jones</p>
                    </div>
                    <p>That looks really great!!</p>
                </li>
            </ul>
        </div>
    )
}

export default Comments;