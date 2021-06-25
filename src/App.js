import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const AUTH_KEY = "99307a90d6af8639b5ee74b97b40249f";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${AUTH_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=99307a90d6af8639b5ee74b97b40249f&query=`;

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const getMovies = async () => {
            const moviesRes = await fetch(FEATURED_API);
            const data = await moviesRes.json();
            console.log(data);
            setMovies(data.results);
        };
        getMovies();
    }, []);
    return (
        <div className="container">
            <div className="movie__container">
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </div>
    );
}

export default App;
