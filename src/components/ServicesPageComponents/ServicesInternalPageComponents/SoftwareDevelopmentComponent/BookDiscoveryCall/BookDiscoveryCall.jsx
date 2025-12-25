"use client";

import React from "react";
import styles from "./BookDiscoveryCall.module.css";

const BookDiscoveryCall = () => {
  return (
    <section className={styles.planSection}>
      {/* Wavy Background SVG */}
      <div className={styles.waveBackground}>
        <svg
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          className={styles.waveSvg}
        >
          <path
            fill="#002c22"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <h3 className={styles.tagline}>
            Imagine it <span className={styles.dot}>•</span> Create it <span className={styles.dot}>•</span> Verify it
          </h3>
          <p className={styles.description}>
            If you need to go from zero to MVP in just <strong>90 days</strong>, then build fast and launch smartly.
          </p>
          <a
            href="/downloads/mvp-checklist.pdf"
            download
            className={styles.downloadButton}
          >
            Download MVP Plan / checklist
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookDiscoveryCall;
