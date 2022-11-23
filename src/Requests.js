const API_KEY ="3e64666bd5f3a70f7c7f5bc003740d9c";

const requests ={
    fetchTrending : `/trending/all/day?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}`,
    fetchTopRated : `/movie/top_rated?api_key=${API_KEY}`,
    fetchScificMovies : `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
    fetchAdventureMovies : `/discover/movie?api_key=${API_KEY}&with_genres=80`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_genres=27`,
}

export default requests;



