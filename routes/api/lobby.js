const express = require('express');
const router = express.Router();
const lobbyController = require("../../controllers/lobbycontroller");
const Lobby = require('../../models/lobby');

router.route("/").get(lobbyController.findAll);
router.route("/:id").get(lobbyController.findById);
router.post("/newlobby", (req, res) => {
  const testlobby = new Lobby({
    "userList": {
      "user1": "rewrew",
      "user2": "dfsajklfd",
      "user3": null,
      "user4": null,
      "user5": null,
      "user6": null,
      "user7": null,
      "user8": null,
      "user9": null,
      "user10": null,
    },
    "expansions": {
      "baseGame": true,
      "first": false,
      "second": false,
      "third": false,
      "fourth": false,
      "fifth": false,
      "sixth": false
    },
    "wincount": 10,
    "gameName": "rewrew's Game",
    "passwordBool": false,
    "password": null
  });
  testlobby.save().then(lobby => res.json(lobby)).catch(err => console.log(err));
})

module.exports = router;