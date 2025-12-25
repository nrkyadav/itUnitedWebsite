"use client";
import React from "react";
import Image from "next/image";
import styles from "./AIAgentsBanner.module.css";

const AIAgentsBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <h2 className={styles.heading}>Discover Our AI Agents</h2>
          <p className={styles.description}>
            At
            <span className={styles.highlight}> Samyotech</span>, we specialize
            in turning innovative ideas into impactful software solutions. Our
            team of experienced developers and tech experts is dedicated to
            helping businesses accelerate their growth through scalable, secure,
            and user-friendly software. With a strong focus on quality and
            agility, we collaborate with clients to create tailored solutions
            that drive success and meet the evolving needs of the digital
            landscape. Explore who we are and what we do, and discover how we
            can help bring your vision to life.
          </p>
        </div>

        <div className={styles.rightImage}>
          <Image
            src="/assets/Images/aiagentsBanner.avif"
            alt="AI Agents Banner"
            fill
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAgentsBanner;
