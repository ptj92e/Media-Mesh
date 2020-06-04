import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./FriendList.css";

function FriendList(props) {
    //This contains the list of all of the friends a user has
    const [friendState, setFriendState] = useState([]);
    //This useEffect is called when the user changes, the friend list is populated
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
                    //If a user has no friends, a message is rendered. If the user has a friends, that list is mapped over to populate the friend list. 
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