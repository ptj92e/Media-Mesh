db = require("../models");

module.exports = {
    newComment: function(req, res) {
        db.Comments.create({
            comment: req.body.comment,
            PostId: req.params.postId,
            UserId: req.params.userId
        }).then(dbComment => {
            res.json(dbComment);
        });
    },
    deleteComment: function(req, res) {
        db.Comments.destroy({
            where: {
                id: req.params.id
            }
        });
    },
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