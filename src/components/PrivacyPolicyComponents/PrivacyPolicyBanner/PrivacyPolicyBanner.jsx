"use client";
import React from "react";
import styles from "./PrivacyPolicyBanner.module.css";

const PrivacyPolicyBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Privacy Policy</h2>
         
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicyBanner;
