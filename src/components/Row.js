import React, { useState, useEffect, createContext, useContext } from 'react';
import axios from '../essential/axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
import "./style/Row.css";
import Movie from './movie';

const MovieContext = createContext();

function Row({ title, fetchUrl, isLargeRow }) {
  const [like, setLike] = useState(false);
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {

    async function fetchData() {

      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "99%",
    playerVars: {
      autoplay: 1,
    }
  }

  const handleClick = (movie) => {
    // console.table(movie?.title)///
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || "")
        .then(url => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div>
        <MovieContext.Provider value={{ handleClick }}>
          <div className="row_posters">
            {movies.map(movie => {
              return <Movie pass = {movie} isLarge = {isLargeRow}/>
            })}
          </div>
        </MovieContext.Provider> 
          <div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
          </div>
      </div>    
    </div>
  );
}

export const UserMovie = () => {
  return useContext(MovieContext);
};

export default Row;
