const router = require("express").Router();
const postController = require("../../controllers/postController");

router
    .route("/")
    .post(postController.newPost);

module.exports = router;