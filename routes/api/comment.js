const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router
    .route("/:postId/:userId")
    .post(commentController.newComment);

module.exports = router;