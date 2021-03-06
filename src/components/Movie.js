const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const setVoteBorder = (vote) => {
    if (vote >= 8) {
        return "green";
    } else if (vote >= 6) {
        return "orange";
    } else {
        return "red";
    }
};

const Movie = ({ title, poster_path, overview, vote_average, release_date }) => {
    const year = new Date(release_date).getFullYear();
    return (
        <div className="movie" style={poster_path ? {} : { display: "none" }}>
            <div className="movie__img-container">
                <img src={IMG_API + poster_path} alt={title} />
            </div>
            <div className="movie__info">
                <div>
                    <h3 className="info__title">{title}</h3>
                    <div className="info__year">{year}</div>
                </div>
                <p
                    className={`info__vote-average`}
                    style={{ borderColor: setVoteBorder(vote_average) }}
                >
                    {vote_average || "N/A"}
                </p>
            </div>
            <div className="movie--over">
                <h2 className="movie--over__title">Overview:</h2>
                <p className="movie--over__overview">{overview}</p>
            </div>
        </div>
    );
};

export default Movie;
