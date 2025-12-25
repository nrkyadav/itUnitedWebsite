"use client";

import React from "react";
import Image from "next/image";
import styles from "./MVPDevelopmentServicesBanner.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const MVPDevelopmentBanner = () => {
  return (
    <section className={styles.bannerSection}>
      <div className={styles.container}>
        <div className={styles.leftContent}>
          <p className={styles.tagline}>
            Think it <span>·</span> Build it <span>·</span> Launch it
          </p>
          <h2 className={styles.heading}>
            Turn Your Idea into a Product Fast with an MVP
          </h2>
          <p className={styles.description}>
            Our MVP development services are designed to reduce risks and costs while fast-tracking your go-to-market strategy. Shape your vision into a real, market-ready MVP solution. What’re you waiting for, then?
            <br /><br />
            Let’s create something that gets real results in faster and smarter ways.
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
            alt="MVP Development"
            fill
            className={styles.bannerImage}
            priority
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </div>
    </section>
  );
};

export default MVPDevelopmentBanner;