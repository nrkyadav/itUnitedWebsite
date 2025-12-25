"use client";

import React from "react";
import styles from "./HomeBanner.module.css";
import Link from "next/link";
import "swiper/css";


const HomeBanner = ({ banner }) => {


  return (
    <section className={styles.hero}>
      <div className={styles.heroContainer}>
        <div className={styles.left}>


          <h1 className={styles.headingStyle}>
            Accelerate Growth with{" "}
            <span className={styles.highlight}>Custom AI & Automation</span>
          </h1>
          <p className={styles.description}>{banner?.descriptionBefore}
            <span className={styles.highlightText}>{banner?.highlightText}</span> {banner?.description}</p>

          <div className={styles.heroButtons}>
            <Link href="/contact-us" className={styles.btnPrimary} >
              Start Your Project
            </Link>
          </div>


        </div>

        <div className={styles.right}>
          <img
            src={banner?.image}
            alt="Banner Image"
            className={styles.heroVideo}
          />
        </div>
      </div>
    </section>
  );
};

export default HomeBanner;
