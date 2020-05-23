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
    }
};