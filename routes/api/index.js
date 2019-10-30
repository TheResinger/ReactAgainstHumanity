const router = require("express").Router();
const lobbyRoute = require("./lobbies");
const whiteCardRoute = require("./whiteCards");
const blackCardRoute = require("./blackCards");
const userListRoute = require("./userlist");

router.use("/lobbies", lobbyRoute);
router.use("/whiteCards", whiteCardRoute);
router.use("/blackCards", blackCardRoute);
// router.use("/userList", userListRoute);

module.exports = router;