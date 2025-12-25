"use client";
import React from "react";
import styles from "./AIAgentsInternalBanner.module.css";

const AIAgentsInternalBanner = ({ title, description, video }) => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        
        <div className={styles.leftContainer}>
          <h2 className={styles.heading}>{title}</h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.right}>
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          />
        </div>

      </div>
    </section>
  );
};

export default AIAgentsInternalBanner;
