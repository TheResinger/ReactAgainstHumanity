const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlackCardSchema = new Schema({
  text: String,
  pick: Number,
  expansion: String
});

const BlackCard = mongoose.model("BlackCard", BlackCardSchema);

module.exports = BlackCard;