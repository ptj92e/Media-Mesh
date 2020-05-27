db = require("../models");

module.exports = {
    addFriend: function(req, res) {
        db.Friends.findOne({
            where: {
                friendId: req.params.id,
                UserId: req.body.id
            }
        }).then(friend => {
            if (!friend) {
                db.Friends.create({
                    friendId: req.params.id,
                    UserId: req.body.id
                });
            } else {
                return;
            }
        });
    },
    seeFriends: function(req, res) {
        console.log("See Friends");
        db.Friends.findAll({
            where: {
                friendId: req.params.id
            }, 
            include: [
                {
                    model: db.User
                }
            ]
        }).then(dbFriends => {
            res.json(dbFriends);
        });
    }
}