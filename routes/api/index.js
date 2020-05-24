const router = require("express").Router();
const userRoutes = require("./userRoutes");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");
const pictureRoutes = require('./picture');

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);
router.use("/profile_pic", pictureRoutes);

module.exports = router;