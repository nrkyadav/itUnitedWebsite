"use client";

import React, { useState } from "react";
import styles from "./FaqComponent.module.css";

const faqData = [
  {
    question: "How does AI & automation service guarantee an ROI?",
    answer:
      "AI and automation services guarantee a return by calculating possible time and cost savings for each integration or automation before implementation. This strategic approach allows us to focus on solutions that will give your organization the highest return on investment. <br/><br/>By distributing AI automatically and making quick and accurate decisions, we release the team’s time so that they can focus on strategic, revenue placement activities.",
  },
  {
    question: "What is the benefit of automating my CRM?",
    answer:
      "You benefit from thousands of apps and integration designed to make working life easier. This results in an increase in productivity, seamless technical stacking and better sales results. <br/><br/>Our automation solutions are designed to eliminate manual features, reduce errors and release their team to focus on high -value strategic tasks.",
  },
  {
    question: "Explain what AI Automation is?",
    answer:
      "AI automation combines artificial intelligence and automation technologies to perform tasks without human intervention. This allows businesses to streamline workflows, analyze data and improve the decision on real time, efficiency, accuracy and scalability.",
  },
  {
    question: "How will this Automation help our business?",
    answer:
      "AI eliminates tasks with competent automation repetition, reduces costs and increases productivity. This enables rapid decision -making, improves the customer interview, adapts business operations and allows the teams to focus on strategic initiatives that promote development.",
  },
  {
    question: "How much time does this AI Automation development take?",
    answer:
      "The timeline project depends on complexity, data and integration requirements. On average, AI resolution development takes 4 to 12 weeks, including distribution for planning, development, testing and uninterrupted implementation.",
  },
  {
    question: "Will you train my team on how to use AI Automation?",
    answer:
      "Yes! We provide extensive training and documentation to ensure that your team understands how to serve, manage and adapt to the AI -automation tool, which enables a smooth transition and maximum efficiency.",
  },
  {
    question: "How can AI Automation increase my business efficiency and productivity?",
    answer:
      "AI competent automation reduces human effort, eliminates repetitive functions, improves accuracy and speeds up processes. By adjusting the workflows, analyzing data and providing real -time insights, AI automation lets companies maximize rapid scale and efficiency.",
  },
  {
    question: "How does AI - Automation deliver business returns?",
    answer:
      "AI automation drives real results by cutting costs, saving time, improving productivity, and scaling operations. Our solutions are designed to create long-term value across your business.",
  },
  {
    question: "How often do the system and procedures need to be updated?",
    answer:
      "Like any technology, systems and procedures benefit from regular updates to stay current and efficient. While your team can handle day-to-day maintenance, we also offer a maintenance package to help ensure your system continues to perform at its best.",
  },
  {
    question: "Do you provide continuous support and training?",
    answer:
      "Yes. Every project includes initial training to get your team up and running with confidence. For ongoing support, we offer optional packages that can include additional training, regular system reviews, and continuous assistance. We’ll help you choose the right level of service based on your business needs.",
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
