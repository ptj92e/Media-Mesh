const router = require("express").Router();
const commentController = require("../../controllers/commentController");

router
    .route("/:postId/:userId")
    .post(commentController.newComment);

router
    .route("/:id")
    .delete(commentController.deleteComment);

router
    .route("/:id")
    .get(commentController.getComments);

module.exports = router;