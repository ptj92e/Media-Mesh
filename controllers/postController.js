db = require("../models");

module.exports = {
    newPost: function(req, res) {
        if (!req.body.picture) {
            db.Posts.create({
                UserId: req.body.id,
                title: req.body.title,
                post: req.body.post
            }).then(dbPost => {
                res.json(dbPost);
            });
        } else {
            db.Posts.create({
                UserId: req.body.id,
                title: req.body.title,
                post: req.body.post,
                url: req.body.picture
            }).then(dbPost => {
                res.json(dbPost);
            });
        }
    }
}