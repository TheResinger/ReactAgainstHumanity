const Lobby = require("../models/lobby");

module.exports = {
  findAll: function(req, res) {
    Lobby.find(req.query).sort().then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
  },

  findById: function(req, res) {
    Lobby.findById(req.params.id).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    Lobby.create(req.body).then(dbModel => res.json(dbModel)).catch(err => res.status(422).json(err));
  }
}