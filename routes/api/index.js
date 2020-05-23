const router = require("express").Router();
const userRoutes = require("./userRoutes");
const loginRoutes = require("./login");
const logoutRoutes = require("./logout");

router.use("/user", userRoutes);
router.use("/login", loginRoutes);
router.use("/logout", logoutRoutes);

module.exports = router;