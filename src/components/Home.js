import HeroSlide from "./HeroSlide";
import MovieContainer from "./MovieContainer";

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
                <MovieContainer movies={movies} />
            </div>
        </>
    );
};

export default Home;
