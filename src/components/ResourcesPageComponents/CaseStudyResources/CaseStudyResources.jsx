"use client";
import React from "react";
import styles from "./CaseStudyResources.module.css";
import Image from "next/image";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const CaseStudyResources = ({ isIndustriesPage = false }) => {

  const cardsData = [
    {
      image: "/assets/Images/tcera.webp",
      title: "Emergency Response with TCERA for TCIF",
      description:
        "Trauma Care International Foundation (TCIF), a global NGO dedicated to improving trauma care and emergency response services,",
      industries: "(NGO)",
      client: "TCERA",
      link: "#",
    },
    {
      image: "/assets/Images/regenesysTransaction.avif",
      title: "Empowering Property Transactions for Regenesys",
      description:
        "Regenesys, a global leader in education and innovative business solutions, sought to expand its offerings with a robust Property Broker Website.",
      industries: "Real Estate",
      client: "Regenesys",
      link: "#",
    },
    {
      image: "/assets/Images/tradingPlatform.webp",
      title: "Transforming Financial Services with Indxx’s Trading Platform",
      description:
        "Indxx, a global leader in innovative indexing and calculation solutions, partnered with us to develop a state-of-the-art trading platform.",
      industries: "Fintech",
      client: "Indxx",
      link: "#",
    },
  ];


  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Case Study
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          Explore our case studies to see how we help businesses tackle challenges and achieve outstanding results. From optimizing operations to delivering innovative solutions, these examples highlight our expertise and impact in driving success.
        </p>

        <div className={styles.cardGrid}>
          {cardsData.map((product, index) => (
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
                <br />
                <p><b>Industries :</b> {product.industries}</p>
                <p><b>Client :</b> {product.client}</p>
                <br />
                <a href={product.link} className={styles.viewLink}>
                  View Case Study
                </a>
              </div>
            </div>
          ))}
        </div>

        {
          !isIndustriesPage &&
          <PrimaryButton
            text="Show More"
            className={styles.gradientButton}

          />
        }

      </div>
    </section>
  );
};

export default CaseStudyResources;
