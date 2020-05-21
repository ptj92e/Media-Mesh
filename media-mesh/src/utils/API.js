import axios from "axios";

export default {
    signIn: function(userData) {
        return axios.post("/api/login", userData);
    }, 
    newUser: function(userData) {
        return axios.post("/api/user", userData);
    },
    signOut: function() {
        return axios.post("/api/logout");
    },
    checkSignIn: function() {
        return axios.post("/api/check_login");
    }
};