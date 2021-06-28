import Movie from "./Movie";

const MovieContainer = ({ movies }) => {
    return (
        <>
            <div className="movie__container">
                {movies.length > 0 && movies.map((movie) => <Movie key={movie.id} {...movie} />)}
            </div>
        </>
    );
};

export default MovieContainer;
