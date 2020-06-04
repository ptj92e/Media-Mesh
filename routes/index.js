//Requiring all necessary modules
const path = require("path");
const router = require("express").Router();
//Requires routes
const apiRoutes = require("./api");

// API Routes and adds "/api" to the route name
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;