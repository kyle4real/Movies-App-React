const IMG_API = `https://image.tmdb.org/t/p/w1280`;

const HeroSlide = ({ backdrop_path }) => {
    return (
        <div className="heroslide__container">
            <img src={IMG_API + backdrop_path} alt="" />
            <div className="heroslide__container--overlay"></div>
        </div>
    );
};

export default HeroSlide;
