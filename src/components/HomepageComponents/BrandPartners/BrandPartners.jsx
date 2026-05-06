"use client";

import React from "react";
import styles from "./BrandPartners.module.css";

const partners = [
  { src: "/assets/partnerImages/BLF Group .png", alt: "BLF Group" },
  { src: "/assets/partnerImages/warner.jpeg", alt: "Warner" },
  { src: "/assets/partnerImages/capital.jpeg", alt: "Capital" },
  { src: "/assets/partnerImages/hic.jpeg", alt: "HIC" },
  { src: "/assets/partnerImages/softude.jpeg", alt: "Softude" },
  { src: "/assets/partnerImages/songDew.jpeg", alt: "Song Dew" },
  { src: "/assets/partnerImages/ditto.jpeg", alt: "Ditto" },
  { src: "/assets/partnerImages/witqualies.jpeg", alt: "Witqualies" },
];

const BrandPartners = () => {
  const loop = [...partners, ...partners, ...partners];

  return (
    <section className={styles.section} aria-label="Brand partners">
      <div className={styles.inner}>
        <div className={styles.header}>
          <div>
            <span className={styles.eyebrow}>Trusted by</span>
            <h2 className={styles.heading}>Partners building with us</h2>
          </div>
          <p className={styles.subtitle}>
            Long-term collaborations across industries and regions.
          </p>
        </div>
      </div>

      <div className={styles.marquee}>
        <div className={styles.track}>
          {loop.map((p, i) => (
            <div key={`${p.alt}-${i}`} className={styles.slot}>
              <img
                src={p.src}
                alt={p.alt}
                className={styles.logo}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
