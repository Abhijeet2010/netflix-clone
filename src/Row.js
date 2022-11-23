import React, { useState, useEffect } from 'react'
import "./Row.css";
import instance from './axios';


const Row = ({title, fetchURL, isLargeRow = false }) => {
 const [movies, setMovies] = useState([]);
 const base_url = "https://image.tmdb.org/t/p/original/"

 useEffect(()=>{
     async function fetchData(){
       const request= await instance.get(fetchURL);
       setMovies(request.data.results);
       return request;
    }
    fetchData()
 }, [fetchURL])

 console.log(movies)

    
  return (
    <div className='row'>

    <h2>{title}</h2>
    
    <div className="row__posters">

    {movies.map((movie)=>{
        return <img 
        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
        key={movie.id}
        src={`${base_url}${
        isLargeRow ?  movie.poster_path : movie.backdrop_path
        }`} alt={movie.name} />
    })}
  
    </div>
    
    </div>
  )
}

export default Row