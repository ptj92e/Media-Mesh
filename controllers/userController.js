db = require("../models");
const bcrypt = require("bcryptjs");

module.exports = {
    newUser: function (req, res) {
        db.User.create(req.body)
            .then(dbUser => res.json(dbUser));
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
    }
}