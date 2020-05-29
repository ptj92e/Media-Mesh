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
    },
    userFeed: function(req, res) {
        db.Posts.findAll({
            where: {
                UserId: req.params.id
            },
            order: [
                ["id", "DESC"]
            ]
        }).then(dbPost => {
            res.json(dbPost);
        });
    },
    newsFeed: function(req, res) {
        db.Posts.findAll({
            include: [
                {
                    model: db.User
                },
                {
                    model: db.Comments,
                    include: [
                        {
                            model: db.User
                        }
                    ]
                }
            ],
            order: [
                ["id", "DESC"]
            ]
        }).then(dbPost => {
            res.json(dbPost);
        });
    },
    deletePost: function(req, res) {
        db.Posts.destroy({
            where: {
                id: req.params.id
            }
        });
    }
}