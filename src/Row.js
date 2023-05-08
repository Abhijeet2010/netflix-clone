import React, { useState, useEffect } from "react";
import "./Row.css";
import instance from "./axios";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const Row = ({ title, fetchURL, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const navigate = useNavigate();
  // const { movie_id } = useParams();

  // https://api.themoviedb.org/3/movie/{movie_id}?api_key=YOUR_API_KEY

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchURL);
      setMovies(request.data.results);

      return request;
    }
    fetchData();
  }, [fetchURL]);

  const handleClick = async (id) => {
    // console.log(id);
    const mainURL = `https://api.themoviedb.org/3/movie/${id}?api_key=3e64666bd5f3a70f7c7f5bc003740d9c`;
    try {
      const response = await fetch(mainURL);
      const data = await response.json();
      console.log(data);
      // Perform any actions you want with the movie data
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
    navigate("/singlepage/" + id);
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${base_url}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie.id)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
