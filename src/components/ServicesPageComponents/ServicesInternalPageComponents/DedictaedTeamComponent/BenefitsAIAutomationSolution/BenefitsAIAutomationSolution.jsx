"use client";
import React from "react";
import styles from "./BenefitsAIAutomationSolution.module.css";

const cards = [
  {
    img: "/assets/Images/increaseProductivity.avif",
    title: "Agile team scalability",
    desc: "Quickly permute your team size to meet project requirements, offering maximum flexibility and open response to changing workloads.",
  },
  {
    img: "/assets/Images/costReduction.avif",
    title: "Cost Efficiency",
    desc: "Enjoy cost savings by utilising staff augmentation, which allows you to pay for the exact skills and hours needed without the long-term obligations associated with full-time staff.",
  },
  {
    img: "/assets/Images/quickDecision.avif",
    title: "Accelerate project timelines",
    desc: "Improve project delivery by quickly onboarding talented experts, reducing development cycles and getting your goods or services to market quicker.",
  },
  {
    img: "/assets/Images/errorReduction.avif",
    title: "Technical expertise",
    desc: "We stay ahead of tech trends to equip your team with top talent, giving skill-fit and successful project delivery.",
  },
];

const BenefitsAIAutomationSolution = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Benefits That Matter</p>

        <h2 className={styles.largeHeading}>
         Key Advantages of IT Staff Augmentation
        </h2>

        <div className={styles.cardsGrid}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.img} alt={card.title} className={styles.cardImage} />

              <div className={styles.cardBox}>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsAIAutomationSolution;
