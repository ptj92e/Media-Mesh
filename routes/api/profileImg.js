const router = require("express").Router();
const userController = require("../../controllers/userController");

router
    .route("/:id")
    .put(userController.updatePic);

module.exports = router;