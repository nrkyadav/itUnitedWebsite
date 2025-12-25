"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./SuccessStories.module.css";



const SuccessStories = ({data}) => {
  const paginationRef = useRef(null);

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <div className={styles.contentWrapper}>
          <div className={styles.textSection}>
            <h2 className={styles.heading}>
              <span className={styles.gradientText}>Success Stories</span>
              <br /> from our Clients
            </h2>
            <div className={styles.headingUnderline}></div>
            <p className={styles.subText}>Customer Testimonials</p>
          </div>

          <div className={styles.swiperSection}>
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              pagination={{
                clickable: true,
                el: paginationRef.current,
              }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              onInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
                swiper.pagination.init();
                swiper.pagination.render();
                swiper.pagination.update();
              }}
              breakpoints={{
                0: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1200: { slidesPerView: 3 },
              }}
              className={styles.swiperContainer}
            >
              {data?.stories?.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className={styles.card}>
                    <div className={styles.cardHeader}>
                      <div className={styles.imageWrapper}>
                        <Image
                          src={t.image}
                          alt={t.name}
                          fill
                          className={styles.userImage}
                        />
                      </div>
                      <div>
                        <h4 className={styles.userName}>{t.name}</h4>
                        <div className={styles.rating}>
                          {Array.from({ length: 5 }).map((_, index) => (
                            <span
                              key={index}
                              className={
                                index < t.rating
                                  ? styles.starFilled
                                  : styles.starEmpty
                              }
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <p className={styles.location}>{t.location}</p>
                      </div>
                    </div>
                    <p className={styles.description}>{t.text}</p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div ref={paginationRef} className={styles.customPagination}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
