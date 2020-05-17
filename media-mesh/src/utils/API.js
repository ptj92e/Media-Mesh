import axios from "axios";

export default {
    signIn: function(userData) {
        return axios.post("/api/login", userData);
    }, 
    newUser: function(userData) {
        return axios.post("/api/user", userData);
    }
};