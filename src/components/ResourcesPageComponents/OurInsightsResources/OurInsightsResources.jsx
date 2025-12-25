"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurInsightsResources.module.css";
import { ChevronsRight } from "lucide-react";

const OurInsightsResources = () => {
  const products = [
    {
      image: "/assets/Images/autmating-test-suites.avif",
      title: "Automating Test Suites with AI: Dos and Don’ts",
      description:
        "Automating test suites with AI enhances speed, accuracy, and scalability in software testing. This",
      link: "#",
      tagTitle:"Artificial Intelligence"
    },
    {
      image: "/assets/Images/ai-code-review.avif",
      title: "AI in Code Review: Improving Quality and Speed",
      description:
        "AI in code review is transforming software development by improving quality and speed. Learn",
      link: "#",
      tagTitle:"Artificial Intelligence"
    },
    {
      image: "/assets/Images/emerging-tech.avif",
      title: "Emerging Tech in Mobile: AR, VR, and Beyond",
      description:
        "Emerging tech in mobile—spanning AR, VR, and beyond—is transforming industries with immersive experiences and",
      link: "#",
      tagTitle:"Mobile App Development"

    },
  ];

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Insights</span>
        </h2>
        <div className={styles.headingUnderline}></div>

        

        <div className={styles.cardGrid}>
          {products.map((product, index) => (
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

export default OurInsightsResources;
