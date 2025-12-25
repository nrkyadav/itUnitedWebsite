
import React from "react";
import Image from "next/image";
import styles from "./AboutSamyotechComponent.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const AboutSamyotechComponent = ({ data }) => {
  return (
    <section className={styles.aboutSection}>

      <div className={styles.aboutWrapper}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            {data?.heading}
          </h2>
          <p className={styles.description}>
            {data?.descriptionBefore} <strong>{data?.descrriptionBold}</strong> {data?.description}
            innovate, and lead.
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.statsRow}>
            {data?.stats.map((item, index) => (
              <div key={index} className={styles.statBox}>
                <p className={styles.statLabel}>{item.label}</p>
                <h3 className={styles.statValue}>{item.value}</h3>
              </div>
            ))}
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutSamyotechComponent;
