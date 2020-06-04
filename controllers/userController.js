db = require("../models");
//These act as methods that the different routes use to make requests to the database.
module.exports = {
    //This method first checks to see if the email input by the user matches one in the database, if there is an email that matches, an alert is sent back to the user. If not, a new user is created. 
    newUser: function (req, res) {
        db.User.findOne({
            where: {
                email: req.body.email
            }
        }).then(user => {
            if (user) {
                res.json("Email in Use");
            } else {
                db.User.create(req.body)
                    .then(dbUser => res.json(dbUser));
            }
        }).catch(err => {
            if (err) {
                console.log(err);
            }
        })
    },
    //This method uses passport's middleware to check to see if the user is authenticted to access the information. If they are, a user is found where the email matches the request, if not, the user cannot access the information. 
    userInfo: function (req, res) {
        if (req.isAuthenticated() === false) {
            res.json();
        } else {
            db.User.findOne({
                where: {
                    email: req.user.email
                }
            }).then(dbUser => {
                res.json(dbUser);
            });
        }
    },
    //This method updates the profile picture where the user's id is equal to the request parameters. Then, the user is found where the id matches the request parameters and is then sent back to the client. 
    updatePic: function (req, res) {
        db.User.update({
            picture: req.body.picture
        }, {
            where: {
                id: req.params.id
            }
        }).then(() => {
            db.User.findOne({
                where: {
                    id: req.params.id
                }
            }).then(dbUser => {
                res.json(dbUser);
            });
        });    
    }
}