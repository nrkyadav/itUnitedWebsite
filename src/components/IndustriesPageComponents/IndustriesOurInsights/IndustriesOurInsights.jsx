"use client";
import React from "react";
import Image from "next/image";
import styles from "./IndustriesOurInsights.module.css";
import { ChevronsRight } from "lucide-react";

const IndustriesOurInsights = ({data}) => {
  

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          {data?.headingBefore} <span className={styles.gradientText}>{data?.heading}</span>
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
        {data?.description}
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

export default IndustriesOurInsights;
