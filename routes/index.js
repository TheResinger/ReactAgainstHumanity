const path = require("path");
const router = require("express").Router();
const lobbyRoutes = require("./api/lobby");
const userRoutes = require("./api/users");

// API Routes
router.use("/api/lobby", lobbyRoutes);
router.use("/api/users", userRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
