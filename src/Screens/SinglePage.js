import React, { useState, useEffect } from "react";
import "./SinglePage.css";
import { useNavigate, useParams } from "react-router-dom";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import ThumbUpRoundedIcon from "@mui/icons-material/ThumbUpRounded";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

const SinglePage = () => {
  const { id } = useParams();
  const [movieData, setMovieData] = useState(null);
  const base_url = "https://image.tmdb.org/t/p/original/";
  const apiKey = "3e64666bd5f3a70f7c7f5bc003740d9c";
  const navigate = useNavigate();

  const letClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        );
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMovieData();
  }, [id, apiKey]);

  if (!movieData) {
    return <div>Loading...</div>;
  }

  const setClick = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}`
      );
      const data = await response.json();
      console.log(data);
      const trailers = data.results.filter(
        (video) => video.type === "Trailer" && video.site === "YouTube"
      );
      if (trailers.length > 0) {
        const trailerKey = trailers[0].key;
        const trailerUrl = `https://www.youtube.com/watch?v=${trailerKey}`;
        window.open(trailerUrl, "_blank");
      }
    } catch (error) {
      console.error("Error fetching trailer data:", error);
    }
  };

  return (
    <div className="singlePage">
      {/* left side */}
      <div className="singlePage__left">
        <img
          src={`${base_url}${
            movieData.poster_path ? movieData.backdrop_path : null
          }`}
          alt={movieData.title}
        />
      </div>
      {/* right side */}
      <div className="singlePage__right">
        <h2>Title: {movieData.title}</h2>
        <br />
        <h2 style={{ display: "inline" }}>Overview : </h2>{" "}
        <p>{movieData.overview}</p>
        <br />
        <h2>Rating: {movieData.vote_average}</h2>
        <br />
        <PlayCircleFilledWhiteIcon
          onClick={setClick}
          style={{ fontSize: "4rem", marginRight: "5rem", cursor: "pointer" }}
        />
        <ThumbUpRoundedIcon style={{ fontSize: "4rem", cursor: "pointer" }} />
      </div>
      {/* Render other movie details here */}

      <ArrowBackRoundedIcon
        style={{
          color: "black",
          cursor: "pointer",
          fontSize: "3rem",
          borderRadius: "50%",
          backgroundColor: "white",
          display: "block",
        }}
        onClick={letClick}
      />
    </div>
  );
};

export default SinglePage;
