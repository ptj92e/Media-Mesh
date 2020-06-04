//Requiring all necessary modules here
const express = require("express");
const session = require("express-session");
const routes = require("./routes");
const db = require("./models");
const app = express();
const PORT = process.env.PORT || 3001;
const passport = require("./config/passport");

// Define middleware here for JSON parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//Requiring the express routes for the app to use
app.use(routes);

// Start the API server. db.sequelize.sync makes sure all changes to the database are good before making a request
db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
});