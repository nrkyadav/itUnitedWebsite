"use client";
import React from "react";
import Image from "next/image";
import styles from "./AIAutomationBanner.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const AIAutomationBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
        <p>Smart Staffing for Smart Teams</p>
          <h2 className={styles.heading}>Hands-On Support from Day One</h2>
          <p className={styles.description}>
            Our services are designed to meet your deadlines, deadlines may not be flexible, but our work to meet them every time is. We thrive by building quick access to specialised talents in AI, mobile, cloud, or enterprise software, allowing your team to focus on outcomes rather and free them from teething challenges.
          </p>

          <PrimaryButton
            text="Schedule a call via Calendly"
            bgColor="#ffffff"
            textGradient="none"
            className={styles.calendlyButton}
          />
          
        </div>

        <div className={styles.rightImage}>
          <Image
            src="/assets/Images/aiBanner.avif"
            alt="AI Banner"
            fill
            className={styles.bannerImage}
          />
        </div>
      </div>
    </section>
  );
};

export default AIAutomationBanner;
