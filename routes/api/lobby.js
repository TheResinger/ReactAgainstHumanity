const express = require('express');
const router = express.Router();
const lobbyController = require("../../controllers/lobbycontroller");
const Lobby = require('../../models/lobby');

router.route("/").get(lobbyController.findAll).post(lobbyController.create);
router.route("/:id").get(lobbyController.findById);

module.exports = router;