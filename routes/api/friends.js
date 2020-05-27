const router = require("express").Router();
const friendController = require("../../controllers/friendController");

router
    .route("/:id")
    .post(friendController.addFriend);

router
    .route("/:id")
    .get(friendController.seeFriends);

module.exports = router;