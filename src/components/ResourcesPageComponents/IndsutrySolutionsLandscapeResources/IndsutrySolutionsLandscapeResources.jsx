"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./IndsutrySolutionsLandscapeResources.module.css";
import { industriesSliderOptions } from "@/constants/StaticContent/StaticContent";

const IndsutrySolutionsLandscapeResources = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Our Industries Solutions Landscape</h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          At IT United, we use the latest tech—AI, cloud computing, blockchain,
          and more—to build secure, scalable, and high-performance software.
          Here’s what drives our success.
        </p>

        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            autoplay={{
              delay: 1800,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: `swiper-pagination-bullet ${styles.customBullet}`,
              bulletActiveClass: `swiper-pagination-bullet-active ${styles.customBulletActive}`,
            }}
            breakpoints={{
              320: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 5 },
            }}
          >
            {industriesSliderOptions.map((industry, index) => (
              <SwiperSlide key={index}>
                <div className={styles.industryCard}>
                  <h3 className={styles.industryTitle}>{industry.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default IndsutrySolutionsLandscapeResources;
