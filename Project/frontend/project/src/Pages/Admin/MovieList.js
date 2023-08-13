import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const TdStyle = {
  ThStyle: `w-1/6 min-w-[160px] border-l border-transparent py-4 bg-black px-3 text-lg font-semibold text-white lg:py-7 lg:px-4`,
  TdStyle: `border-b border-l border-[#E8E8E8] bg-[#F3F6FF] py-5 px-2 text-center text-base font-medium text-dark`,
  TdButton: `inline-block px-6 py-2 border rounded border-primary text-primary hover:bg-primary hover:text-white`,
};

const Table = () => {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const navigate = useNavigate();

  const getMovie = async () => {
    try {
      setIsloading(true);
      const response = await axios.get("http://localhost:5000/api/v1/movies/");
      console.log(response.data);
      setMovie(response.data.movie);
      setIsloading(false);
    } catch (error) {
      toast.error(error.message);
      setIsloading(true);
    }
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <section className="py-10 bg-white px-[100px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
              <table className="w-full table-auto">
                <thead className="text-center bg-primary">
                  <tr>
                    <th className={TdStyle.ThStyle}> Title </th>
                    <th className={TdStyle.ThStyle}> Category </th>
                    <th className={TdStyle.ThStyle}> Created At </th>
                    <th className={TdStyle.ThStyle}> Updated At </th>
                    <th className={TdStyle.ThStyle}> Edit </th>
                    <th className={TdStyle.ThStyle}> Delete </th>
                  </tr>
                </thead>

                <tbody>
                  {!isLoading && movie.length === 0 ? (
                    <h4>No movie added</h4>
                  ) : (
                    // Map through the task
                    movie.map((item, index) => {
                      // Delete a movie
                      const deleteMovie = async (id) => {
                        if (
                          window.confirm("Are you sure you want to delete?")
                        ) {
                          try {
                            const response = await axios.delete(
                              `http://localhost:5000/api/v1/movies/${item._id}`
                            );
                            toast.success(response.data.msg);
                            getMovie();
                          } catch (error) {
                            console.log(error);
                          }
                        }
                      };
                      return (
                        <tr key={item._id}>
                          <td className={TdStyle.TdStyle}>
                            {item.movie_title}
                          </td>
                          <td className={TdStyle.TdStyle}>
                            {item.movie_category}
                          </td>
                          <td className={TdStyle.TdStyle}>{item.createdAt}</td>
                          <td className={TdStyle.TdStyle}>{item.updatedAt}</td>
                          <td className={TdStyle.TdStyle}>
                            <button
                              className="bg-[blue] text-white p-4"
                              onClick={() => {
                                navigate(`/edit/${item._id}`);
                              }}
                            >
                              {" "}
                              Edit
                            </button>
                          </td>
                          <td className={TdStyle.TdStyle}>
                            <button
                              className="bg-[red] text-white p-4"
                              onClick={() => deleteMovie(item._id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Table;
