db = require("../models");

module.exports = {
    newComment: function(req, res) {
        db.Comments.create({
            comment: req.body.comment,
            PostId: req.params.postId,
            UserId: req.params.userId
        }).then(() => {
            res.status(200);
        });
    },
    deleteComment: function(req, res) {
        db.Comments.destroy({
            where: {
                id: req.params.id
            }
        }).then(() => {
            res.status(200);
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
            ]
        }).then(dbComments => {
            res.json(dbComments);
        });
    }
}