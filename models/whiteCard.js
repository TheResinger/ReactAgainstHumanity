const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const whiteCardSchema = new Schema({
  cardText: {type: String, required: true}
});

const WhiteCard = mongoose.model("WhiteCard", whiteCardSchema);

module.exports = WhiteCard;