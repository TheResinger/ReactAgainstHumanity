const express = require('express');
const router = express.Router();
const lobbyController = require("../../controllers/lobbycontroller");

router.route("/")
  .get(lobbyController.findAll);

module.exports = router;



// const testlobby = new Lobby ({
    //     user1: "TheResinger",
    //     user2: null,
    //     user3: null,
    //     user4: null,
    //     user5: null,
    //     user6: null,
    //     user7: null,
    //     user8: null,
    //     user9: null,
    //     user10: null,
    //     expansions: [{ expansion: "BaseGame" }],
    //     wincount: 10,
    //     gameName: "TheResinger's Game",
    //     passwordBool: false,
    //     password: null
    // });
    // testlobby.save().then(lobby => res.json(lobby)).catch(err => console.log(err));