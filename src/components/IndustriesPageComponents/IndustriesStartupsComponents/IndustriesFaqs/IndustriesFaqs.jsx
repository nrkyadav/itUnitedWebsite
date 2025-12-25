"use client";
import React, { useState } from "react";
import styles from "./IndustriesFaqs.module.css";


const IndustriesFaqs = ({faqData}) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const firstColumn = faqData.slice(0, 4);
  const secondColumn = faqData.slice(4, 8);

  return (
    <section className={styles.engagementSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Got Questions? We’ve Got Answers!</h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.description}>
          Browse through our frequently asked questions to find quick insights
          and clear answers about our process, services, and engagement models.
        </p>

        <div className={styles.faqGrid}>
          {[firstColumn, secondColumn].map((column, colIndex) => (
            <div key={colIndex} className={styles.column}>
              {column.map((faq, index) => {
                const faqIndex = colIndex * 4 + index; 
                
                return (
                  <div key={faqIndex} className={styles.accordionItem}>
                    <button
                      className={styles.accordionButton}
                      onClick={() => toggleAccordion(faqIndex)}
                    >
                      <span>{faq.question}</span>
                      <span className={styles.icon}>
                        {activeIndex === faqIndex ? "−" : "+"}
                      </span>
                    </button>

                    <div
                      className={`${styles.accordionContent} ${
                        activeIndex === faqIndex ? styles.open : ""
                      }`}
                    >
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesFaqs;
