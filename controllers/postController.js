db = require("../models");
//These act as methods that the different routes use to make requests to the database.
module.exports = {
    //This method creates new posts. If the post has no picture, a post is created without a picture url. If there is a url, a post is created with a picture url. The post is then sent back to the client via JSON.
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
    //This method pulls only the posts created by the user and includes the user. That is sent back to the client via JSON.
    userFeed: function(req, res) {
        db.Posts.findAll({
            where: {
                UserId: req.params.id
            },
            include: [
                {
                    model: db.User
                }
            ],
            order: [
                ["id", "DESC"]
            ]
        }).then(dbPost => {
            res.json(dbPost);
        });
    },
    //This method finds each post in the database and includes the user that created them. The posts are then sent back to the client via JSON.
    newsFeed: function(req, res) {
        db.Posts.findAll({
            include: [
                {
                    model: db.User
                }
            ],
            order: [
                ["id", "DESC"]
            ]
        }).then(dbPost => {
            res.json(dbPost);
        });
    },
    //This method deletes posts where the post id matches the request parameters.
    deletePost: function(req, res) {
        db.Posts.destroy({
            where: {
                id: req.params.id
            }
        });
    }
}