const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const lobbySchema = new Schema({
  userList: [],
  expansions: [{ expansion: String }],
  wincount: Number,
  gameName: String,
  passwordBool: Boolean,
  password: String
});

const Lobby = mongoose.model("Lobby", lobbySchema);

module.exports = Lobby;