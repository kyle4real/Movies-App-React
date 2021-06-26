import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper/core";
import Nav from "./components/Nav";
import Movie from "./components/Movie";
import HeroSlide from "./components/HeroSlide";

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

    SwiperCore.use([Autoplay, EffectFade]);

    return (
        <>
            <Nav
                handleOnSubmit={handleOnSubmit}
                handleOnChange={handleOnChange}
                searchTerm={searchTerm}
            />
            <div className="hero__container">
                <Swiper
                    slidesPerView={1}
                    effect={"fade"}
                    speed={2000}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                >
                    {movies.slice(0, 3).map((movie) => (
                        <SwiperSlide>
                            <HeroSlide key={movie.id} {...movie} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
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
