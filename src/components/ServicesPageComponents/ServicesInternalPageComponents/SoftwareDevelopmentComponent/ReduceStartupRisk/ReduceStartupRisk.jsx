"use client";

import React from "react";
import styles from "./ReduceStartupRisk.module.css";

const ReduceStartupRisk = () => {
  return (
    <section className={styles.riskSection}>
      <div className={styles.container}>
        <h2 className={styles.mainTitle}>
          Reduce Startup Risk with a Strategic MVP
        </h2>

        <div className={styles.cardsGrid}>
          {/* Card 1 */}
          <div className={styles.card}>
            <h3 className={styles.statTitle}>38% of startups fail</h3>
            <p className={styles.cardText}>
              because they <span className={styles.highlightRed}>run out of cash</span>, and{" "}
              <span className={styles.highlightRed}>35% fail</span> due to no market demand,{" "}
              both of which MVPs address by validating ideas early and conserving resources.
            </p>
          </div>

          {/* Card 2 */}
          <div className={styles.card}>
            <p className={styles.researchText}>
              Research indicates that{" "}
              <span className={styles.bigNumber}>9 out of 10</span>
            </p>
            <h3 className={styles.statTitleRed}>Startups fail</h3>
            <p className={styles.cardText}>
              underscoring the need for a{" "}
              <span className={styles.highlightBlue}>low-risk approach like an MVP</span>.
            </p>
          </div>

          {/* Card 3 */}
          <div className={styles.card}>
            <h3 className={styles.statTitle}>60% of companies fail</h3>
            <p className={styles.cardText}>
              to make it to Series A, with a success rate of{" "}
              <span className={styles.highlightBlue}>30%–40%</span>, and{" "}
              <span className={styles.highlightRed}>35% of Series A companies</span> fail to reach Series B,{" "}
              emphasizing the importance of early validation through an MVP.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReduceStartupRisk;