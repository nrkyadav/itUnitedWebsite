"use client";

import React, { useState } from "react";
import styles from "./FaqComponent.module.css";

const faqData = [
  {
    question: "How do I select the right IT workers through staff augmentation?",
    answer:
      "A detailed review of project requirements aids in identifying the relevant skill sets. The augmentation supplier then recruits qualified people with the necessary skills to guarantee project success.",
  },
  {
    question: "How can I keep control of my project while using staff augmentation?",
    answer:
      "You have complete control over your project and team, with full scale. Our specialists collaborate closely with you as an integral part of your team, but you may lead the workflow, establish goals, and manage day-to-day duties as needed. Our assistance guarantees that everything remains on track.",
  },
  {
    question: "What is the typical duration for IT staff augmentation?",
    answer:
      "The amount of time depends on the project requirements. It can take anywhere from a few months to many years, depending on the project’s complexity and scope.",
  },
  {
    question: "What do you mean by IT-Based Staff Augmentation?",
    answer:
      "IT Staff Augmentation is a new outsourcing strategy that allows you to employ talented technical people from around the world and manage them directly. Choose professionals who meet your needs, and swiftly scale your team to complete tasks on schedule.",
  },
  {
    question: "Is IT staff augmentation economically viable?",
    answer:
      "Absolutely, IT staff augmentation reduces long-term hiring and training costs by allowing organisations to bring in competent individuals as needed, making it a flexible option.",
  },
  {
    question: "What will be the top advantage of IT Staff Augmentation?",
    answer:
      "Staff augmentation provides quick access to specialised talent, the ability to extend teams as project demands change, and a more cost-effective alternative to hiring permanent staff. It lets organisations effectively bridge skill shortages, improve project efficiency, and maintain complete control over development, while keeping costs under control.",
  },
  {
    question: "How does Staff Augmentation differ from IT Outsourcing?",
    answer:
      "Staff augmentation and outsourcing are both effective in addressing skills shortages, but are very distinct in methodologies. Staff augmentation involves hiring temporary workers or contractors to operate alongside your in-house workforce. This technique is perfect for bridging specific skill gaps or supporting short-term projects, as the corporation retains complete control over the project and directly supervises the augmented team. Outsourcing, on the other hand, is delegating a complete project or function to an outside organisation. The third-party provider is completely liable for the project’s implementation, while the employing business has limited direct influence over the process.",
  },
  {
    question: "Is it easy to scale my team up or down with Full Scale?",
    answer:
      "Yes, flexibility and scalability are important benefits of our IT staff augmentation services. You may simply scale your team up or down according to project requirements, all while assuring consistently high standards and efficient delivery",
  },
  {
    question: "Factors should be considered before selecting a staff augmentation services firm?",
    answer:
      "Before picking a staff augmentation partner, clearly define your personal needs, then assess their recruitment strength, industry reputation, knowledge, and client feedback to guarantee they are in line with your goals.",
  },
  {
    question: "Approximately what type of time does it take to augment staff?",
    answer:
      "Onboarding times vary, depending on your demands and the complexity of the role, but most clients seamlessly incorporate new team members within one to two weeks. For more information you can directly contact us.",
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
