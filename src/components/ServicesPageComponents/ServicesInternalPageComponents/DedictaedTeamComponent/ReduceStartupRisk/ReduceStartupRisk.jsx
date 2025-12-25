"use client";

import React from "react";
import styles from "./ReduceStartupRisk.module.css";

const ReduceStartupRisk = () => {
  return (
    <section className={styles.riskSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          IT Staff Augmentation Market Report
        </h2>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className={styles.statTitle}>CAGR of 13.7%</h3>
            <p className={styles.cardText}>
              The IT staff augmentation and outsourcing market was valued at<span className={styles.highlightBlue}> $339.96 billion</span>, in 2024 and is expected to reach{" "}
              <span className={styles.highlightBlue}>$1,218.87</span> , billion by the coming years, increasing at a{" "}
              <span className={styles.highlightBlue}> CAGR of 13.7% between 2025 and 2033.</span>

            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <h3 className={styles.statTitle}>70% of companies</h3>
            <p className={styles.cardText}>
              over{" "}
              <span className={styles.highlightBlue}> 70% {" "}</span>
              of companies worldwide are expected to adopt IT staff augmentation models by 2027 to
                <span className={styles.highlightRed}> address skill gaps {" "}</span>
                and reduce time-to-hire.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className={styles.statTitle}>development time 30–45%</h3>
            <p className={styles.cardText}>
              Staff augmentation cuts development time by{" "}
              <span className={styles.highlightBlue}>30–45%,</span>
              helping you deliver projects faster.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReduceStartupRisk;