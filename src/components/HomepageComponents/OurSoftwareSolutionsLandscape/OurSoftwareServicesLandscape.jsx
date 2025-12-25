"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurSoftwareSolutionsLandscape.module.css";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import { useRouter } from "next/router";

const OurSoftwareSolutionsLandscape = ({data}) => {
  const router = useRouter();
  

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Software</span> Solutions Landscape
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          Delivering Innovative Solutions to Help various Industries Explore the Path of Evolution and Growth
        </p>

        <div className={styles.cardGrid}>
          {data?.solutions?.map((product, index) => (
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
                <a href={product.link} className={styles.viewLink}>
                  View Solution <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>

        <PrimaryButton
          text="Explore all our Solutions"
          className={styles.gradientButton}
          onClick={() => router.push("/solutions")}


        />
      </div>
    </section>
  );
};

export default OurSoftwareSolutionsLandscape;
