import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./featured.module.css";
import FeaturedShow from "../Featured-show/FeaturedShow";

function Featured(props) {
  const [isHovered, setIsHovered] = useState(false);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef(null);

  return (
    <section 
      className={styles.featured} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>

      <Swiper
        slidesPerView={4.3}
        spaceBetween={20}
        modules={[Navigation]}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => {
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        className={styles.shows}
      >
        {props.movies.map((movie, index) => (
          <SwiperSlide key={index}>
            <FeaturedShow movie={movie} />
          </SwiperSlide>
        ))}
      </Swiper>

      {isHovered && !isBeginning && (
        <button className={`${styles.navButton} ${styles.left}`} onClick={() => swiperRef.current.slidePrev()}>
          ◀
        </button>
      )}
      {isHovered && !isEnd && (
        <button className={`${styles.navButton} ${styles.right}`} onClick={() => swiperRef.current.slideNext()}>
          ▶
        </button>
      )}
    </section>
  );
}

export default Featured;
