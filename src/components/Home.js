import HeroSlide from "./HeroSlide";
import Movie from "./Movie";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectFade } from "swiper/core";

const Home = ({ movies }) => {
    SwiperCore.use([Autoplay, EffectFade]);
    return (
        <>
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
};

export default Home;
