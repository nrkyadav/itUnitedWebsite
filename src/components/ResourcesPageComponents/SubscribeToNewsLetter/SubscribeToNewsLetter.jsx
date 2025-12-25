"use client";
import React from "react";
import styles from "./SubscribeToNewsLetter.module.css";

const SubscribeToNewsLetter = () => {
  return (
    <section className={styles.subscribeSection}>
      <div className={styles.contentWrapper}>
        <div className={styles.textBlock}>
          <h2 className={styles.heading}>Subscribe To Our Newsletter</h2>
          <p className={styles.subText}>
            Subscribe to the gateway to a world of insights and innovation.
          </p>
        </div>

        <form className={styles.formWrapper}>
          <input
            type="email"
            placeholder="Enter your email"
            className={styles.emailInput}
          />
          <button type="submit" className={styles.submitButton}>
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default SubscribeToNewsLetter;
