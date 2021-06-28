import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Nav from "./components/Nav";

const AUTH_KEY = "99307a90d6af8639b5ee74b97b40249f";

const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${AUTH_KEY}&page=1`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=99307a90d6af8639b5ee74b97b40249f&query=`;

function App() {
    const [movies, setMovies] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const searchMovies = async (searchTerm) => {
        const moviesRes = await fetch(SEARCH_API + searchTerm);
        const data = await moviesRes.json();
        setSearchResults(data.results);
    };

    useEffect(() => {
        const getMovies = async () => {
            const moviesRes = await fetch(FEATURED_API);
            const data = await moviesRes.json();
            console.log(data);
            setMovies(data.results);
        };
        getMovies();
    }, []);

    const handleOnSubmit = (e) => {
        e.preventDefault();
        if (!searchTerm) return;
        searchMovies(searchTerm);
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
                    <Route path="/">
                        <Home movies={movies} />
                    </Route>
                </Switch>
            </Router>
        </>
    );
}

export default App;
