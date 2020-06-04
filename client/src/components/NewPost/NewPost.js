import React, { useState, useRef } from "react";
import NewsFeed from "../NewsFeed/NewsFeed";
import UserFeed from "../UserFeed/UserFeed";
import "./NewPost.css";
import API from "../../utils/API";

function NewPost(props) {
    //These variables make references to the title of the post and the body of the post
    const titleRef = useRef();
    const postRef = useRef();
    //This contains the url of the picture uploaded
    const [imgState, setImgState] = useState({
        imgURL: ""
    });
    //This calls the news feed/user feed to re-render when a new post is added
    let [count, setCount] = useState(0);
    //This pulls up the upload widget and makes a call to upload the picture to cloudinary. Then, the response is saved to the imageState
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
    //Handle Submit creates a new post and checks to see if the post has a picture or not. count is then incrementd to call the news feed/user feed to re-render
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
                setCount(count += 1);
            });
        } else {
            API.newPost({
                id: props.user.id,
                title: titleRef.current.value,
                post: postRef.current.value,
                picture: imgState.imgURL
            }).then(() => {
                setImgState({
                    imgUrl: ""
                });
                titleRef.current.value = "";
                postRef.current.value = "";
                setCount(count += 1);
            });
        };
    };

    return (
        <div>
            <div id="newPost">
                <form onSubmit={handleSubmit}>
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
                        <button type="submit">Post</button>
                    </div>
                </form>
            </div>
            {
                //This ternary operator determines which post feed to render. If it is home, the newsfeed is rendered. If it isn't, the userfeed is rendered.
                props.page.page === "Home" ?
                    <NewsFeed
                        user={props.user}
                        count={count}
                    />
                    :
                    <UserFeed
                        user={props.user}
                        count={count}
                    />
            }
        </div>
    )
}

export default NewPost;