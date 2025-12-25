"use client";
import React from "react";
import Image from "next/image";
import styles from "./ServicesPageBanner.module.css";

const ServicesPageBanner = ({data}) => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>{data?.heading}</h2>
          <p className={styles.description}>
         {data?.description}
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statBox}>
              <p>Years of Experience</p>
              <h3>12+</h3>
            </div>
            <div className={styles.statBox}>
              <p>Apps Delivered</p>
              <h3>850+</h3>
            </div>
            <div className={styles.statBox}>
              <p>Remote Developers</p>
              <h3>120+</h3>
            </div>
            <div className={styles.statBox}>
              <p>Passionate Delivery</p>
              <h3>100%</h3>
            </div>
          </div>
        </div>

        <div className={styles.rightImage}>
          <Image
            src={data?.image}
            alt="Services Banner"
            fill
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesPageBanner;
