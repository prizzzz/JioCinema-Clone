import React from "react";
import styles from "./banner.module.css";
import playIcon from "../../assets/play_Icon-removebg-preview.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


function Banner(props) {
  return (
    <div className={styles.banner}>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        autoplay={{ delay: 5000 }}
        modules={[Pagination, Navigation, Autoplay]}
        className={styles.bannerSwiper}
      >
        {props.movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <div className={styles.bannerSlide}>
              <div className={styles.movieInfo}>
                <h1>{movie.name}</h1>
                <div className={styles.movieDes}>
                  <p>{movie.language}</p>
                  <span>|</span>
                  <p>{movie.genre[1]}</p>
                </div>
                <button>
                  <img src={playIcon} alt="" width="15px" height="15px" /> Watch
                </button>
              </div>
              <div className={styles.imageContainer}>
                <img className={styles.posterImg} src={movie.posterUrl} alt="Slide" width='100%' height='95%' />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Banner;





