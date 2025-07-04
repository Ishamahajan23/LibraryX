const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
  name: { type: String, require: true },
  birthYear: { type: Number },
  nationality: { type: String },
});

const authorModel = mongoose.model("Author", authorSchema);

module.exports = authorModel;
