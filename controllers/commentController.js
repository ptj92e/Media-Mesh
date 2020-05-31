db = require("../models");

module.exports = {
    newComment: function(req, res) {
        db.Comments.create({
            comment: req.body.comment,
            PostId: req.params.postId,
            UserId: req.params.userId
        });
    },
    deleteComment: function(req, res) {
        db.Comments.destroy({
            where: {
                id: req.params.id
            }
        });
    }
}