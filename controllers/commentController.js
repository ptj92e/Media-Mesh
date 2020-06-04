db = require("../models");
//These act as methods that the different routes use to make requests to the database.
module.exports = {
    //This method creates a new comment and sends it back to the client in a JSON format
    newComment: function(req, res) {
        db.Comments.create({
            comment: req.body.comment,
            PostId: req.params.postId,
            UserId: req.params.userId
        }).then(dbComment => {
            res.json(dbComment);
        });
    },
    //This method deletes a comment where the comment's id matches what is sent along with the request parameters
    deleteComment: function(req, res) {
        db.Comments.destroy({
            where: {
                id: req.params.id
            }
        });
    },
    //This method finds all comments where the post id matches the request parameters and includes the user that created each comment. They are ordered in a descending order so they appear on the screen in a particular order. Those comments are sent via JSON back to the client.
    getComments: function(req, res) {
        db.Comments.findAll({
            where: {
                PostId: req.params.id
            },
            include: [
                {
                    model: db.User
                }
            ],
            order: [
                ["id", "DESC"]
            ]
        }).then(dbComments => {
            res.json(dbComments);
        });
    }
}