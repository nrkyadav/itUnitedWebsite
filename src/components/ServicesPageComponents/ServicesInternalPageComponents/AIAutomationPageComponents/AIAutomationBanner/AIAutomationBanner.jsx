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
        <p>Next-Gen AI Services</p>
          <h2 className={styles.heading}>AI & Automation Marketing Agency</h2>
          <p className={styles.description}>
          Modern businesses run and transform with technology . We offer AI -automation services to companies to eliminate repetitive tasks, reduce human errors and help make decisions about smart time.
          <br/><br/>
          We combine AI and automation to streamline your workflows by connecting your apps and automating tasks between them. This replaces manual work, increasing your team’s bandwidth, quality, speed, and ability to deliver large-scale customer experiences fully customized to you.
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
