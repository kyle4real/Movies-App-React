import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";

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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <Router>
                <Nav
                    handleOnSubmit={handleOnSubmit}
                    handleOnChange={handleOnChange}
                    searchTerm={searchTerm}
                />
                <Switch>
                    <Home movies={movies} />
                </Switch>
            </Router>
        </>
    );
}

export default App;
