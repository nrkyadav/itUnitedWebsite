"use client";

import React from "react";
import styles from "./EveryoneCustomer.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";

const EveryoneCustomer = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.inner}>

        <p className={styles.subheading}>Everyone is a Customer</p>

        <h2 className={styles.heading}>Our AI Automation Models</h2>

        <div className={styles.cardsRow}>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Process Automation Model</h3>
            <p className={styles.cardDesc}>
              We streamline operations with AI-powered automation to cut manual work and 
              boost efficiency. Using RPA, machine learning, and intelligent bots, we 
              automate finance, customer support, and supply chain—so your team can 
              focus on what matters most.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Decision Intelligence Model</h3>
            <p className={styles.cardDesc}>
              Our Decision Intelligence Model uses AI and advanced analytics to deliver 
              fast, smart decisions. From forecasting to risk management, we turn real-time 
              data into actionable insights that drive clarity, agility, and business growth.
            </p>
          </div>

          <div className={styles.card}>
            <h3 className={styles.cardTitle}>Customer Experience Automation Model</h3>
            <p className={styles.cardDesc}>
              We enhance customer satisfaction with AI-powered automation. From chatbots 
              to intelligent support systems, we reduce wait times, personalize interactions, 
              and cut costs while delivering 24/7 service.
            </p>
          </div>

        </div>

        <p className={styles.footerText}>
          Contact our development team and find out how automation drives smarter growth
        </p>

        <PrimaryButton
          text="Schedule a call via Calendly"
          customClass={styles.customButton}
        />

      </div>
    </section>
  );
};

export default EveryoneCustomer;
