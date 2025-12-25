"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurProductsLandscape.module.css";
import { ArrowUpRight } from "lucide-react";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import { useRouter } from "next/router";
import Link from "next/link";


const OurProductsLandscape = ({data}) => {
  const router = useRouter();
  
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Products</span> Landscape
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          Delivering innovative products that empower businesses to evolve and grow.
        </p>

        <div className={styles.cardGrid}>
          {data?.products?.map((product, index) => (
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
                {product.link ? (
                  <Link href={product.link} className={styles.viewLink}>
                    View Product <ArrowUpRight size={18} />
                  </Link>
                ) : (
                  <span className={styles.viewLinkDisabled}>Coming Soon</span>
                )}

              </div>
            </div>
          ))}
        </div>

        <PrimaryButton
          text="Explore all our Products"
          className={styles.gradientButton}
          onClick={() => router.push("/solutions/products")}
        />
      </div>
    </section>
  );
};

export default OurProductsLandscape;
