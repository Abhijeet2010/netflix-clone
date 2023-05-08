import React from "react";
import Banner from "../Banner";
import "./HomeScreen.css";
import Nav from "../Nav";
import requests from "../Requests";
import Row from "../Row";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* 1st  component*/}
      <Nav />

      {/* 2nd  component*/}
      <Banner />

      {/* 3rd  component*/}
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} isLargeRow />
      <Row title="Netflix Original" fetchURL={requests.fetchNetflixOriginals} />

      <Row title="Trending Movies" fetchURL={requests.fetchTrending} />
      <Row title="Adventure Movies" fetchURL={requests.fetchAdventureMovies} />
      <Row
        title="Science-fiction"
        fetchURL={requests.fetchScificMovies}
        isLargeRow
      />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    </div>
  );
};

export default HomeScreen;
