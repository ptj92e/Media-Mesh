db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
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