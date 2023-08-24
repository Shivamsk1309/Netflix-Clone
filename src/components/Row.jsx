import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import "../styles/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";


const Row = ({ title, url, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const handleClick = async (movie) => {
    try {
      if (trailerUrl) setTrailerUrl("");
      else {
        const options = {
          tmdbId: movie.id, // Pass the TMDB content ID
          apiKey: "dff518c62b66f76f29833a636e83c0d6", // Pass your TMDB API key here
          multi: false, // Return a single URL
        };

        const url = await movieTrailer(null, options);
        if (url) {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
        } else {
          console.log("Trailer URL not found");
        }
      }
    } catch (error) {
      console.error("Error fetching trailer URL:", error);
    }
  };

  useEffect(() => {
    apiClient.get(url).then((res) => {
      let data = res.data.results;
      setMovies(data);
    });
  }, [url]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <div className="row">
      <h1 className="title">{title}</h1>
      <div className="row-posters">
        {movies.map((mov) => (
          <img
            key={mov.id}
            onClick={()=>handleClick(mov )}
            src={
              isLarge
                ? `https://image.tmdb.org/t/p/original${mov.poster_path}`
                : `https://image.tmdb.org/t/p/original${mov.backdrop_path}`
            }
            alt={mov.title}
            className={isLarge ? "posterLarge" : "poster"}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}></YouTube>}
    </div>
  );
};

export default Row;
