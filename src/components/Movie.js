const IMG_API = `https://image.tmdb.org/t/p/w1280`;

function Movie({ title, poster_path, overview, vote_average }) {
    return (
        <div className="movie">
            <img src={IMG_API + poster_path} alt={title} />
            <div className="movie__info">
                <h3 className="info__title">{title}</h3>
                <p className="info__vote-average">{vote_average}</p>
            </div>
        </div>
    );
}

export default Movie;
