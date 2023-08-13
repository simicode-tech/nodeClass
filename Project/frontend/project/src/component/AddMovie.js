import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

function AddMovie() {
  const [movie, setMovie] = useState({
    movie_title: "",
    movie_category: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (movie.movie_title === "" || movie.movie_category === "") {
      return toast.error("Input fields cannot be empty!");
      //   console.log("Input fields cannot be empty!");
    }
    try {
      await axios.post("http://localhost:5000/api/v1/movies/", movie);
      toast.success("Successfully created");
      setMovie({ ...movie, movie_title: "", movie_category: "" });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  const handleMovie = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setMovie({ ...movie, [name]: value });
  };

  return (
    <div className="flex justify-center bg-purple-400 ">
      <div className=" shadow bg-white p-6 w-80 my-40">
        <h2 className="text-center font-semibold pb-4"> Add Movie</h2>
        <form className="flex  grap flex-col" onSubmit={handleSubmit}>
          <label>Movie Title</label>
          <input
            type="text"
            placeholder="enter title"
            name="movie_title"
            value={movie.movie_title}
            onChange={handleMovie}
            className="border hidden sm:block py-2 px-3 mb-2 rounded-xl border-orange-500"
          />
          <label>Movie Category</label>
          <input
            type="text"
            placeholder="Movie Category"
            name="movie_category"
            value={movie.movie_category}
            onChange={handleMovie}
            className="border py-2 px-3 rounded-xl border-orange-500"
          />
          <button
            type="submit"
            className="bg-black hover:bg-orange-300 rounded-xl text-white w-20 my-5 py-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddMovie;
