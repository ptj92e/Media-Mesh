const router = require("express").Router();
const userRoutes = require("./userRoutes");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const pictureRoutes = require('./profileImg');
const postRoutes = require("./postRoutes");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/profile_pic", pictureRoutes);
router.use("/post", postRoutes);

module.exports = router;