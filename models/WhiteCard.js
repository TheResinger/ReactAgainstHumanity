const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WhiteCardSchema = new Schema({
  text: String,
  expansion: String
});

const WhiteCard = mongoose.model("WhiteCard", WhiteCardSchema);

module.exports = WhiteCard;