"use client";
import React from "react";
import Image from "next/image";
import styles from "./OurBlogs.module.css";
import { ChevronsRight } from "lucide-react";

const OurBlogs = () => {
  const blogs = [
    {
      image: "/assets/Images/blog1.avif",
      title: "Building a Technical Roadmap That Aligns with Business Goals",
      description:
        "Learn how to build a technical roadmap that aligns with business goals, prioritizes projects,",
      link: "#",
      tagTitle:"Software Consulting"
    },
    {
      image: "/assets/Images/blog2.avif",
      title: "Industry-Specific Software Consulting: What Sets It Apart",
      description:
        "Learn how industry-specific software consulting helps businesses tackle sector challenges with customized solutions, improving",
      link: "#",
      tagTitle:"Software Consulting"
    },
    {
      image: "/assets/Images/blog3.avif",
      title: "Risk Mitigation Through Strategic Software Consulting",
      description:
        "Learn how strategic software consulting helps mitigate risks in software development projects. Explore best",
      link: "#",
      tagTitle:"Software Consulting"

    },
  ];

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Blogs</span>
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
        Dive into our blog for insights, trends, and expert perspectives that help you stay ahead. From industry analysis to practical tips and thought leadership, our articles explore the ideas shaping today’s business landscape.
        </p>

        <div className={styles.cardGrid}>
          {blogs.map((product, index) => (
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

export default OurBlogs;
