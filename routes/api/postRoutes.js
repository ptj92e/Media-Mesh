const router = require("express").Router();
const postController = require("../../controllers/postController");

router
    .route("/")
    .post(postController.newPost);

router
    .route("/:id")
    .get(postController.userFeed);

module.exports = router;