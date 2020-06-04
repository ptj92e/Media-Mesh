db = require("../models");
//These act as methods that the different routes use to make requests to the database.
module.exports = {
    //This method first checks to see if the user is a friend with another user. If they are, the mehtod returns and nothing happens. If they are not friends, it saves the user's id as the friendId and the UserId as the foreign key.
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
    //This method retrieves all of the friends a user has. Those friends are then sent via JSON back to the client.
    seeFriends: function(req, res) {
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