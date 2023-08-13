const express = require("express");
const router = express.Router();
const Movie = require("../model/movieModel");
const {
  createMovie,
  getAllMovie,
  getSingleMovie,
  deleteMovie,
  editMovie,
} = require("../controller/movieController");
const authMiddleware = require("../middleware/auth");

router.post("/api/v1/movies", authMiddleware, createMovie);
// all movies
router.get("/api/v1/movies", getAllMovie);
// single movie
router.get("/api/v1/movies/:id", getSingleMovie);
router.delete("/api/v1/movies/:id", authMiddleware, deleteMovie);
router.put("/api/v1/movies/:id", authMiddleware, editMovie);

module.exports = router;
