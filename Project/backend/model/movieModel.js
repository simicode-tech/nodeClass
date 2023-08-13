const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    movie_title: {
      type: String,
      required: [true, "Please enter movie_title"],
    },
    movie_category: {
      type: String,
      required: [true, "Please enter movie_category"],
    },
  },
  {
    timestamps: true,
  }
);
const Movie = mongoose.model("Movie", movieSchema);
module.exports = Movie;
