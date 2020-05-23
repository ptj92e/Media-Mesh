const router = require("express").Router();
const userController = require("../../controllers/userController");

router
    .route("/")
    .post(userController.newUser);

router
    .route("/info")
    .post(userController.userInfo);

module.exports = router;