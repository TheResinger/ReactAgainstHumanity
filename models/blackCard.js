const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blackCardSchema = new Schema({
  cardText: {type: String, required: true},
  pick: {type: Number, required: true},
  expansion: {type: String, required: true},
});

const BlackCard = mongoose.model("BlackCard", blackCardSchema);

module.exports = BlackCard;