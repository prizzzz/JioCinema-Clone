import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";
import styles from "./tags.module.css";

function Tags() {
  const [tags] = useState([
    "For You", "Premium", "Laughter Chefs", "Cricket", "MTV Roadies XX", "FREE Movies", 
    "Bigg Boss", "News", "BBK", "Kids & Family", "AUS vs IND", "FREE Anime", "Studios", 
    "ISL", "FREE Shows", "TATA IPL", "Top 10", "Creators Adda", "Tennis", "Live", "TV & Movies"
  ]);
  
  const [activeTag, setActiveTag] = useState("For You"); // ✅ Track active tag

  return (
    <div className={styles.tagsContainer}>
      <Swiper
        slidesPerView="auto"
        spaceBetween={10}
        freeMode={true}
        grabCursor={true}
        modules={[FreeMode]}
        className={styles.swiper}
      >
        {tags.map((tag, index) => (
          <SwiperSlide key={index} className={styles.tagSlide}>
            <p 
              className={`${styles.tag} ${activeTag === tag ? styles.activeTag : ""}`} 
              onClick={() => setActiveTag(tag)} // ✅ Change active tag on click
            >
              {tag}
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Tags;
