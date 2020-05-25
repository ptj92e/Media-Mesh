import axios from "axios";

export default {
    signIn: function(userData) {
        return axios.post("/api/login", userData);
    }, 
    newUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    signOut: function() {
        return axios.get("/api/logout");
    },
    userInfo: function() {
        return axios.post("/api/user/info");
    },
    profilePic: function(picInfo) {
        return axios.put("/api/profile_pic/" + picInfo.id, {picture: picInfo.picture});
    },
    newPost: function(postInfo) {
        return axios.post("/api/post/", postInfo);
    },
    userFeed: function(id) {
        return axios.get("/api/post/" + id);
    },
    newsFeed: function() {
        return axios.get("/api/post");
    },
    deletePost: function(id) {
        return axios.delete("/api/post/" + id);
    }
};