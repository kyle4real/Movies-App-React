import { useState, useEffect } from "react";
import Movie from "./components/Movie";

const AUTH_KEY = "99307a90d6af8639b5ee74b97b40249f";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${AUTH_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=99307a90d6af8639b5ee74b97b40249f&query=`;

function App() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getMovies = async (search) => {
        const URL = search ? SEARCH_API + search : FEATURED_API;
        const moviesRes = await fetch(URL);
        const data = await moviesRes.json();
        console.log(data);
        console.log(searchTerm);
        setMovies(data.results);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm) return;
        getMovies(searchTerm);
        setSearchTerm("");
    };

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
        console.log(searchTerm);
    };

    return (
        <>
            <header>
                <div className="nav container">
                    <form onSubmit={handleOnSubmit}>
                        <input
                            className="search__bar"
                            type="search"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={handleOnChange}
                        />
                    </form>
                </div>
            </header>
            <div className="container">
                <div className="movie__container">
                    {movies.length > 0 &&
                        movies.map((movie) => <Movie key={movie.id} {...movie} />)}
                </div>
            </div>
        </>
    );
}

export default App;
