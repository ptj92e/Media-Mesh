const router = require("express").Router();
const db = require("../../models");
const passport = require("../../config/passport");

router.post("/", passport.authenticate("local"), function (req, res) {
    req.login(req.body, function (err) {
        if (err) {
            return next(err);
        } else {
            db.User.findOne({
                where: {
                    email: req.body.email
                }
            }).then(dbUser => res.json(dbUser));
        }
    });
});

module.exports = router;