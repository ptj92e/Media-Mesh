import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./ProfileHead.css";

function ProfileHead(props) {
    const [userState, setUserState] = useState({});
    //This allows the user to change their profile picture
    const uploadWidget = () => {
        window.cloudinary.openUploadWidget({
            cloud_name: "dr74dmsmp",
            upload_preset: "dogpy375",
            tags: ["media"]
        },
            function (err, res) {
                if (err) {
                    return;
                } else {
                    API.profilePic({
                        id: userState.id,
                        picture: res[0].url
                    }).then(res => {
                        setUserState(res.data);
                    });
                }
            });
    };
    //This useEffect is called to gather the user's information
    useEffect(() => {
        setUserState(props.user);
    }, [props.user]);

    return (
        <div id="profileInfo">
            {
                //If the user doesn't have a profile picture, a stock one is provided.
                userState.picture === null ?
                <img alt="profile" src="/images/picture.png" />
                :
                <img alt="profile" src={userState.picture} />
            }
            <i onClick={uploadWidget} className="fas fa-portrait fa-2x"></i>
            <h3 id={userState.id}>{userState.name}</h3>
            <p>{userState.artform}</p>
        </div>
    );
};
export default ProfileHead;