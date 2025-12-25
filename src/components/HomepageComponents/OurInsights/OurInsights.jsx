"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurInsights.module.css";
import { ChevronsRight } from "lucide-react";

const OurInsights = ({data}) => {
  

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Insights</span>
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
        Explore the best of chronicles leading to our tech-powered triumphs. From startup to star to behind-the-scenes,
        walk through our groundbreaking insights.
        </p>

        <div className={styles.cardGrid}>
          {data?.articles?.map((product, index) => (
            <div key={index} className={styles.card}>
                    <div className={styles.tag}>{product.tagTitle}</div>
              <div className={styles.imageWrapper}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className={styles.cardImage}
                />
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{product.title}</h3>
                <p className={styles.cardDesc}>{product.description}</p>
                <a href={product.link} className={styles.viewLink}>
                  Read More <ChevronsRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurInsights;
