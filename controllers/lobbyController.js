const db = require("../models");

module.exports = {
  findAll: function(req, res) {
    db.Lobby
      .find(req.query)
      .sort()
  },
  create: function(req, res) {
     
  }
}