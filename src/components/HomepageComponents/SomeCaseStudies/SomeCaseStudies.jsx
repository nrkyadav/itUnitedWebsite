"use client";
import React from "react";
import styles from "./SomeCaseStudies.module.css";
import Image from "next/image";

const SomeCaseStudies = ({data}) => {
  
    
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
        Some Of Our Case Studies
        </h2>
        <div className={styles.headingUnderline}></div>

        <div className={styles.cardGrid}>
          {data?.caseStudies?.map((product, index) => (
            <div key={index} className={styles.card}>
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
                <br/>
                <p><b>Industries :</b> {product.industries}</p>
                <p><b>Client :</b> {product.client}</p>
                <br/>
                {/* <a href={product.link} className={styles.viewLink}>
                  View Case Study 
                </a> */}
              </div>
            </div>
          ))}
        </div>
       

      </div>
    </section>
  );
};

export default SomeCaseStudies;
