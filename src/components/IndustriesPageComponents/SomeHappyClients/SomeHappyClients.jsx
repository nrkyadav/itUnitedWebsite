"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import styles from "./SomeHappyClients.module.css";

const SomeHappyClients = ({data}) => {


  return (
    <section className={styles.wrapper}>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={2000}
        loop={true}
        freeMode={true}
        className={styles.clientsSwiper}
      >
        {data?.clients?.map((client, i) => (
          <SwiperSlide key={i} className={styles.clientSlide}>
            <Image
              src={client}
              alt={`Client ${i + 1}`}
              width={150}
              height={70}
              className={styles.clientLogo}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.centerText}>
        <span className={styles.line}></span>
        <h3 className={styles.text}>Some Happy Clients</h3>
        <span className={styles.line}></span>
      </div>
    </section>
  );
};

export default SomeHappyClients;
