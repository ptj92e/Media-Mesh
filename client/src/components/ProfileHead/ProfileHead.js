import React, { useState, useEffect } from "react";
import API from "../../utils/API";
import "./ProfileHead.css";

function ProfileHead() {
    const [userState, setUserState] = useState({});
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


    useEffect(() => {
        API.userInfo()
            .then(res => {
                setUserState(res.data);
            });
    }, []);

    return (
        <div id="profileInfo">
            {userState.picture === null ?
                <h3>Upload A Profile Picture!</h3>
                :
                <img alt="profile" src={userState.picture} />
            }
            <a href="#"><i onClick={uploadWidget} className="fas fa-portrait fa-2x"></i></a>
            <h3 id={userState.id}>{userState.name}</h3>
            <p>{userState.artform}</p>
        </div>
    );
};
export default ProfileHead;