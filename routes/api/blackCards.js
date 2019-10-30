const router = require("express").Router();
const cardController = require("../../controllers/cardController");

router.route("/")
  .get(cardController.findAllBlackCards);

module.exports = router;