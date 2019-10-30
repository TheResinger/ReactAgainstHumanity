const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lobbySchema = new Schema({
  user1: String,
  user2: String,
  user3: String,
  user4: String,
  user5: String,
  user6: String,
  user7: String,
  user8: String,
  user9: String,
  user10: String,
  expansions: String,
  wincount: Number,
  gameName: String
});

const Lobby = mongoose.model("Lobby", lobbySchema);

module.exports = Lobby;