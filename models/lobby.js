const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lobbySchema = new Schema({
  userList: [],
  expansions: [],
  wincount: Number,
  gameName: String,
  passwordBool: Boolean,
  password: String,
  gameStarted: Boolean,
});

const Lobby = mongoose.model("Lobby", lobbySchema);

module.exports = Lobby;

