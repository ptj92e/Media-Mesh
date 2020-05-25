const router = require("express").Router();
const postController = require("../../controllers/postController");

router
    .route("/")
    .post(postController.newPost);

router
    .route("/:id")
    .get(postController.userFeed);

router
    .route("/")
    .get(postController.newsFeed);

router
    .route("/:id")
    .delete(postController.deletePost);

module.exports = router;