"use client";

import React from "react";
import styles from "./EveryoneCustomer.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const EveryoneCustomer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>

        <p className={styles.subheading}>MVP</p>

        <h2 className={styles.heading}>We Build Custom MVPs for</h2>

        <div className={styles.cardsRow}>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Large Businesses</h3>
            <p className={styles.cardDesc}>
              Personalised MVPs for testing innovation and growth.
              Simplifying complex processes into easy solutions.
              Developing quick innovation at the corporate level.
              Combining long-term business goals.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Mid-Sized Businesses</h3>
            <p className={styles.cardDesc}>
              We customized MVPs for small business requirements
              Cost-effective, low-risk concept testing.
              Quick market entry and low costs.
              Will offer Cost-effective without sacrificing qualit
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Startup</h3>
            <p className={styles.cardDesc}>
              MVP development with a focus on strategy and market validation
              Fast delivery based on user input
              Giving startups a competitive advantage
            </p>
          </div>

        </div>

        <p className={styles.footerText}>
          For correct guidance, use our thorough PRD guide to examine our MVP development services, irrespective of your company's size, Startup, Medium-Sized, or Large.
        </p>

        <PrimaryButton
          text="Download Our Free PRD Guide"
          customClass={styles.customButton}
        />

      </div>
    </section>
  );
};

export default EveryoneCustomer;
