const router = require("express").Router();
const userRoutes = require("./userRoutes");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const pictureRoutes = require('./profileImg');
const postRoutes = require("./postRoutes");
const friendRoutes = require("./friends");
const commentRoutes = require("./comment");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/profile_pic", pictureRoutes);
router.use("/post", postRoutes);
router.use("/friend", friendRoutes);
router.use("/comment", commentRoutes);

module.exports = router;