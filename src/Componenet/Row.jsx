const base_url = "https://image.tmdb.org/t/p/original/"
import axios from '../axios'
import { useState, useEffect } from 'react'
import YouTube from 'react-youtube';
import movieTrailer from 'movie-Trailer';
import "./row.css"



// eslint-disable-next-line react/prop-types
function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
    async function fetchData() {
        const request = await axios.get(fetchUrl);
        console.log(request.data.results)
        setMovies(request.data.results);
        return request;
    }
    fetchData();
}, [fetchUrl]);
console.log(movies)
const opts = {
    heighr: "390",
    width: "100%",
    playerVars: {
    autoplay: 1,
    },
};
const handleClick = (movie) => {
    if (trailerUrl) {
        setTrailerUrl("");
    } else {
        movieTrailer(movie?.title || movie?.name || movie.orirginal_name)
            .then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch((error) => console.log(error));
    }
};

    return (
        <div className="row">
            <h2>{title}</h2>
                <div className="row__posters">
                {movies.map((movie) => (
                    <img
                    key={movie.id}
                    onClick={() => handleClick(movie)}
                    className={`row__poster ${
                    isLargeRow && "row__posterLarge"
                    }`}
                    src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                    }`}
                    alt={movie.name}
                />
            ))}
        </div>
        <div style={{ padding: "40px" }}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>
    </div>
);
}


export default Row