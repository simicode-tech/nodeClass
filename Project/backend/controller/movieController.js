const express = require("express");
const Movie = require("../model/movieModel");
const expressAsyncHandler = require("express-async-handler");

const createMovie = expressAsyncHandler(async (req, res) => {
  try {
    const { movie_title, movie_category } = req.body;
    const movie = await Movie.create({ movie_title, movie_category });
    res.status(200).json({ msg: "Movie saved", movie });
  } catch (error) {
    res.status(500).json(error);
  }
});

const getAllMovie = async (req, res) => {
  try {
    const movie = await Movie.find();
    res.status(200).json({ msg: "Movie saved", movie });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const movie = await Movie.findById(id);
    res.status(200).json({ msg: "single movie", movie });
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteMovie = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const removeMovie = await Movie.findByIdAndDelete(id);
    if (!removeMovie) {
      return res.status(404).json({ msg: `Movie with id: ${id} not found` }); // throw new Error (`No movie with id: ${id} found`)
    }
    res.status(200).json({ msg: "movie deleted" });
  } catch (error) {
    res.status(500).json(error);
  }
});
const editMovie = expressAsyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    // console.log(req.body);
    const editMovie = await Movie.findByIdAndUpdate({ _id: id }, req.body, {
      new: true,
      runValidators: true,
    });
    // if (!removeMovie) {
    //   return res.status(404).json({ msg: `Movie with id: ${id} not found` }); // throw new Error (`No movie with id: ${id} found`)
    // }
    res.status(200).json({ msg: "edit movie ", editMovie });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = {
  createMovie,
  getAllMovie,
  getSingleMovie,
  deleteMovie,
  editMovie,
};
