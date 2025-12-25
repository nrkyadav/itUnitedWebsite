"use client";
import React from "react";
import styles from "./BenefitsAIAutomationSolution.module.css";

const cards = [
  {
    img: "/assets/Images/increaseProductivity.avif",
    title: "Increased Productivity & Efficiency",
    desc: "We streamline workflows with AI automation, reduce manual tasks, and increase efficiency so your team can focus on development and innovation.",
  },
  {
    img: "/assets/Images/costReduction.avif",
    title: "Cost reduction and scalability",
    desc: "Intelligent AI cuts the cost of reducing automation errors, saving resources and scaling operations, which enables growth without overheads.",
  },
  {
    img: "/assets/Images/quickDecision.avif",
    title: "Availability and Quick Decision",
    desc: "Our AI automation runs as needed, enabling real-time insight, faster decisions, improved response, and ongoing trade development.",
  },
  {
    img: "/assets/Images/errorReduction.avif",
    title: "Error reduction and compliancey",
    desc: "As an AI automation Company, we create solutions that reduce errors, give compliance and provide accurate, risk-free operations.",
  },
];

const BenefitsAIAutomationSolution = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>AI That Delivers Value</p>

        <h2 className={styles.largeHeading}>
          Benefits of Our AI Automation Solutions
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
