"use client";

import React from "react";
import styles from "./ToolsWrapper.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ToolsWrapper = () => {
  const images = [
    "/assets/Images/axure.webp",
    "/assets/Images/adobexs.webp",
    "/assets/Images/balsamiq.webp",
    "/assets/Images/figma.webp",
    "/assets/Images/miro.webp",
    "/assets/Images/sketch.webp",
    "/assets/Images/trello.webp",

  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={3000}
          loop={true}
          slidesPerView={4}
          spaceBetween={30}
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className={styles.imageBox}>
                <img src={src} alt={`tool-${index}`} className={styles.image} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ToolsWrapper;