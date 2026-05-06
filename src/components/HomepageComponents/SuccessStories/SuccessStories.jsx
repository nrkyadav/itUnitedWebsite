"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import styles from "./SuccessStories.module.css";

const SuccessStories = ({ data }) => {
  const paginationRef = useRef(null);

  return (
    <section className={styles.smartSection}>
      <div className={styles.inner}>
        <header className={styles.header}>
          <span className={styles.eyebrow}>Customer voices</span>
          <h2 className={styles.heading}>
            What our clients say about working with{" "}
            <span className={styles.brand}>IT United</span>.
          </h2>
          <p className={styles.subText}>
            Real outcomes from teams who trusted us to ship their next chapter.
          </p>
        </header>

        <div className={styles.swiperSection}>
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={3}
            initialSlide={0}
            pagination={{
              clickable: true,
              el: paginationRef.current,
            }}
            autoplay={{ delay: 4500, disableOnInteraction: false }}
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
                <article className={styles.card}>
                  <div className={styles.cardTop}>
                    <span className={styles.cardNumber}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div
                      className={styles.rating}
                      aria-label={`Rated ${t.rating} out of 5`}
                    >
                      {Array.from({ length: 5 }).map((_, index) => (
                        <span
                          key={index}
                          className={
                            index < t.rating ? styles.starFilled : styles.starEmpty
                          }
                          aria-hidden="true"
                        >
                          ★
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className={styles.description}>{t.text}</p>

                  <footer className={styles.cardFooter}>
                    <h4 className={styles.userName}>{t.name}</h4>
                    {t.location && (
                      <p className={styles.location}>{t.location}</p>
                    )}
                  </footer>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>

          <div ref={paginationRef} className={styles.customPagination}></div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
