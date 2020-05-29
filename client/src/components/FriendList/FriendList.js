import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./FriendList.css";

function FriendList(props) {
    const [friendState, setFriendState] = useState([]);

    useEffect(() => {
        API.seeFriends(props.user.id)
            .then(res => {
                setFriendState(res.data);
            });
    }, [props.user]);

    return (
        <div id="friendList">
            <h3>Your Friends</h3>
            <ul>
                {
                    friendState.length === 0 ?
                        <h3>Find who inspires you!</h3>
                        :
                        friendState.map(friend =>
                            <li className="row" key={friend.User.id}>
                                {
                                    friend.User.picture === null ?
                                        <img 
                                        className="friendImg"
                                        alt="profile" src="/images/picture.png" />
                                        :
                                        <img 
                                        className="friendImg"
                                        alt="profile" src={friend.User.picture} />
                                }
                                <p>{friend.User.name}</p>
                            </li>
                        )
                }
            </ul>
        </div>
    );
};

export default FriendList;