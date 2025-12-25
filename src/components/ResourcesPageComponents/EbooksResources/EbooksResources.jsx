"use client";
import React from "react";
import Image from "next/image";
import styles from "./EbooksResources.module.css";
import { User } from "lucide-react";

const EbooksResources = () => {
  const ebooksCardData = [
    {
      id: 1,
      img: "/assets/Images/ebook1.png",
      title: "Gen AI’s Potential for Businesses and How Yours Can Get Started",
      author: "Samyotech",
      description:
        "Generative AI is reshaping business with greater efficiency and innovation.",
    },
    {
      id: 2,
      img: "/assets/Images/ebook2.png",
      title: "Gen AI’s Potential for Businesses and How Yours Can Get Started",
      author: "Samyotech",
      description:
        "Generative AI is reshaping business with greater efficiency and innovation.",
    },
  ];

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Ebooks</h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          Delight users, deliver value, and accelerate your innovation with
          software development services that outperform functionalities and
          capabilities.
        </p>

        <div className={styles.cardWrapper}>
          {ebooksCardData?.map((ebook) => (
            <div className={styles.card} key={ebook.id}>
              <div className={styles.imageSection}>
                <Image
                  src={ebook.img}
                  alt={ebook.title}
                  width={300}
                  height={300}
                  className={styles.cardImage}
                />
              </div>
              <div className={styles.contentSection}>
                <h3 className={styles.title}>{ebook.title}</h3>
                <div className={styles.authorBox}>
                  <User className={styles.authorIcon} />
                  <p className={styles.author}>{ebook.author}</p>
                </div>
                <p className={styles.description}>{ebook.description}</p>
                <div className={styles.buttonWrapper}>
                  <button className={styles.downloadButton}>Download</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EbooksResources;
