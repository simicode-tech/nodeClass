import React, { useEffect, useState } from "react";
import axios from "axios";
function MovieList() {
  const [movie, setMovie] = useState([]);
  const getMovie = async () => {
    const res = await axios.get("http://localhost:5000/api/v1/movies/");
    const { movie } = await res.data;
    setMovie(movie);
  };
  useEffect(() => {
    getMovie();
  }, []);
  console.log(movie);
  return (
    <div className="flex flex-wrap">
      <div className="grid sm:grid-cols-3  gap-4">
        {movie.map((list) => {
          return (
            <div className="shadow-md border p-5" key={list.movie_title}>
              <img
                src="https://www.rollingstone.com/wp-content/uploads/2021/06/ACTION-FMOIVES_WEB-1.jpg"
                alt="title"
                className="h-[200px] w-[300px]"
              />
              <h2>{list.movie_category}</h2>
              <p>{list.movie_title}</p>
              <div className="flex flex-col">
                <p>
                  Created At:
                  <span className="text-[12px]">{list.createdAt}</span>
                </p>
                <p>
                  Updated At:
                  <span className="text-[12px]"> {list.updatedAt}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
      {/* {movie.map((list) => {
        return (
        //   <div className="grid gap-4 sm:grid-cols-3">
        //     <div className="shadow-md border p-5">
        //       <img
        //         src="https://www.rollingstone.com/wp-content/uploads/2021/06/ACTION-FMOIVES_WEB-1.jpg"
        //         alt="title"
        //         className="h-[200px] w-[400px]"
        //       />
        //       <h2>{list.movie_category}</h2>
        //       <p>{list.movie_title}</p>
        //     </div>
        //   </div>
        );
      })} */}
    </div>
  );
}

export default MovieList;
