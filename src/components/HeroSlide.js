const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const HeroSlide = ({ backdrop_path, title, overview }) => {
    return (
        <div className="heroslide__container">
            <img src={IMG_API + backdrop_path} alt="" />
            <div className="heroslide__container--overlay"></div>
            <div className="content__container container">
                <div className="content">
                    <h1 className="content__title">{title}</h1>
                    <div className="cta">
                        <button className="cta__play">
                            <i class="far fa-play-circle"></i>Play
                        </button>
                        <button className="cta__myList">
                            <i class="far fa-plus-square"></i>My List
                        </button>
                    </div>
                    <p className="content__overview">{overview}</p>
                </div>
            </div>
        </div>
    );
};

export default HeroSlide;
