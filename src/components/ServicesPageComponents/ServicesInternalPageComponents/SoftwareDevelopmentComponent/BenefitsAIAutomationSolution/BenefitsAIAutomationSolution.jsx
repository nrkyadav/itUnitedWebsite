"use client";
import React from "react";
import styles from "./BenefitsAIAutomationSolution.module.css";

const cards = [
  {
    img: "/assets/Images/increaseProductivity.avif",
    title: "Validate Your Market",
    desc: "Launch your MVP to validate your idea before full investment. While others are still in development, you'll be gathering real feedback and adapting to what your market actually needs.",
  },
  {
    img: "/assets/Images/costReduction.avif",
    title: "Business Idea Testing",
    desc: "Speed up the validation of your idea-to-MVP process. Making use of an MVP speeds up the testing of ideas/hypotheses, guaranteeing fast and effective approval of concepts.",
  },
  {
    img: "/assets/Images/quickDecision.avif",
    title: "Cost Efficient",
    desc: "Without a significant investment, test your market. Ideal for founders and early-stage startups who wish to confirm their concept prior to carrying out the expenses of entire development.",
  },
  {
    img: "/assets/Images/errorReduction.avif",
    title: "Make improvements faster",
    desc: "Easily reach product-market-user matching. Identify mismatches in a matter of weeks to allow for timely adjustments and recurrent.",
  },
];

const BenefitsAIAutomationSolution = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Primary Advantages</p>

        <h2 className={styles.largeHeading}>
         The Importance of an MVP for Your Startup
        </h2>

        <p className={styles.bigHeading}>MVP development is a game-changer that provides multiple benefits.</p>


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
