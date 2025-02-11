import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode} from "swiper/modules";
import styles from "./shows.module.css";
import Show from "../Show/Show";

function Shows(props) {
  return (
    <>
      <section className={styles.shows}>
        <h1 className={styles.title}>{props.title}</h1>

        <Swiper
          slidesPerView={5.6}   
          spaceBetween={20}   
          freeMode={true}     
          modules={[FreeMode]}
          className={styles.showsParent}
        >
          {props.movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Show movie={movie} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Shows;
