"use client";

import React, { useState } from "react";
import styles from "./FaqComponent.module.css";

const faqData = [
  {
    question: "How to Pick an MVP software development company?",
    answer:
      "You can select an MVP software development company that has shown up experience, a robust portfolio, and a clear grasp of your market. Make sure they follow adaptable practices, provide overall support, and focus on quick delivery that centers on the user.",
  },
  {
    question: "How long does it take to develop an MVP?",
    answer:
      "It can take anywhere from three to six months to develop an MVP. The number of features, the makeup of the development team, and the complexity of the project all affect an exact schedule. If you want a time estimate for your MVP development project, you may schedule a call with us.",
  },
  {
    question: "What factors cost of MVP? And How much does it cost to develop an MVP?",
    answer:
      "The cost of developing an MVP is modified by various factors from, The complexity of features to Development timeframe.  It can differ greatly depending on the project scope, team expertise, and regional rates.",
  },
  {
    question: "Can your MVP development team help us with the designing part for our app?",
    answer:
      "Of course! Our UX and design professionals guarantee that your MVP is not only useful but also visually pleasing and simple to use. We collaborate closely with you to create an engaging user interface.",
  },
  {
    question: "What’s the role of business goals in MVP development?",
    answer:
      "They help in feature prioritization and resource optimization. Business goals lead the development of the MVP by identifying the main issue to address and setting out clear criteria for success.",
  },
  {
    question: "Do you help existing businesses as well, or are your MVP services only for startups?",
    answer:
      "We help companies of various sizes, but our speciality is startups. Our flexible strategy meets your needs at each point in your development.",
  },
  {
    question: "How can I get started with samyotech for MVP development?",
    answer:
      "To begin with your MVP development, you can directly contact us and our team will schedule a consultation to dive deep into your project and discuss how we can assist in achieving your vision.",
  },
  {
    question: "How is an MVP's success identified?",
    answer:
      "User engagement, feedback, and if the MVP resolves the main issue and confirms the product concept are used to evaluate success.",
  },
  {
    question: "What’s the difference between a prototype and an MVP?",
    answer:
      "An MVP is a functional product that solves actual user problems, whereas a prototype is a model of thought used to demonstrate design concepts.",
  },
  {
    question: "What tools are used to create an MVP?",
    answer:
      "The building of MVPs can be completed with a variety of tools, such as backend-as-a-service providers like Firebase, development frameworks like React and Angular, and no-code/low-code platforms.",
  },
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const col1 = faqData.slice(0, 5);
  const col2 = faqData.slice(5, 10);

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <p className={styles.smallHeading}>FAQ's</p>
        <h2 className={styles.largeHeading}>Frequently Asked Question</h2>

        <div className={styles.columns}>
          {[col1, col2].map((col, colIndex) => (
            <div className={styles.column} key={colIndex}>
              {col.map((item, index) => {
                const globalIndex = colIndex === 0 ? index : index + 5;
                const isOpen = activeIndex === globalIndex;

                return (
                  <div key={globalIndex} className={styles.accordionItem}>
                    <button
                      className={styles.accordionHeader}
                      onClick={() => toggleAccordion(globalIndex)}
                    >
                      <span>{item.question}</span>
                      <span
                        className={`${styles.arrow} ${isOpen ? styles.rotate : ""
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`${styles.accordionContent} ${isOpen ? styles.open : ""
                        }`}
                    >
                      <p dangerouslySetInnerHTML={{ __html: item.answer }} />
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

export default FaqComponent;
