const mongoose = require("mongoose");
const {Schema} = mongoose
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
    required: true,
  },
  year: { type: Number },
  genre: { type: String },
  available: { type: Boolean, default: true },
});

const bookModel = mongoose.model("Book", bookSchema);

module.exports =bookModel;