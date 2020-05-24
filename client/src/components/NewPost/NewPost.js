import React, { useRef } from "react";
import "./NewPost.css";

function NewPost() {
    const titleRef = useRef();
    const URLref = useRef();
    const postRef = useRef();

    return(
        <div id="newPost">
            <form>
                <h3>How do you want to inspire others today?</h3>
                <div className="row">
                    <input
                        required
                        placeholder="Title"
                        ref={titleRef}
                    />
                    <input
                        placeholder="Image URL"
                        ref={URLref}
                    />
                </div>
                <div className="row">
                    <textarea
                        required
                        placeholder="Start a post..."   ref={postRef}  
                    />
                </div>
                <button type="submit">Post</button>
            </form>
        </div>
    )
}

export default NewPost;