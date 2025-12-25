"use client";
import React from "react";
import styles from "./ProductBanner.module.css";

const ResourcesBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Our Products</h2>
          <p className={styles.description}>
         Explore our most successful products, designed for clients from diverse industries. Each one highlights our commitment to innovation, efficiency, and measurable outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResourcesBanner;
