"use client";
import React from "react";
import styles from "./ResourcesBanner.module.css";

const ResourcesBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Resources</h2>
          <p className={styles.description}>
          Delight users, deliver value, and accelerate your innovation with software development services that outperform functionalities and capabilities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesBanner;
