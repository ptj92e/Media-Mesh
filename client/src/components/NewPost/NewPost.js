import React, { useState, useRef } from "react";
import NewsFeed from "../NewsFeed/NewsFeed";
import UserFeed from "../UserFeed/UserFeed";
import "./NewPost.css";
import API from "../../utils/API";

function NewPost(props) {
    const titleRef = useRef();
    const postRef = useRef();
    const [imgState, setImgState] = useState({
        imgURL: ""
    });

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
                    setImgState({
                        imgURL: res[0].url
                    });
                }
            });
    };

    const handleSubmit = e => {
        e.preventDefault();
        if (imgState.imgURL === "") {
            API.newPost({
                id: props.user.id,
                title: titleRef.current.value,
                post: postRef.current.value
            }).then(() => {
                titleRef.current.value = "";
                postRef.current.value = "";
            });
        } else {
            API.newPost({
                id: props.user.id,
                title: titleRef.current.value,
                post: postRef.current.value,
                picture: imgState.imgURL
            }).then(res => {
                console.log(res);
                setImgState({
                    imgUrl: ""
                });
                titleRef.current.value = "";
                postRef.current.value = "";
            });
        };
    };

    return (
        <div>
            <div id="newPost">
                <form>
                    <h3>How do you want to inspire others today?</h3>
                    <div className="row">
                        <input
                            required
                            placeholder="Title"
                            ref={titleRef}
                        />
                        <button onClick={uploadWidget}>Upload an Image</button>
                    </div>
                    <p>Picture URL: {imgState.imgURL}</p>
                    <div className="row">
                        <textarea
                            required
                            placeholder="Start a post..." ref={postRef}
                        />
                    </div>
                    <div id="buttonDiv">
                        <button onClick={handleSubmit} type="submit">Post</button>
                    </div>
                </form>
            </div>
            {
                props.page.page === "Home" ?
                    <NewsFeed
                        user={props.user}
                    />
                    :
                    <UserFeed
                        user={props.user}
                    />
            }
        </div>
    )
}

export default NewPost;