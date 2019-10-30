const db = require("../models");

module.exports = {
  findAllWhiteCards: function(req, res) {
    db.WhiteCard
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  findAllBlackCards: function(req, res) {
    db.BlackCard
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}