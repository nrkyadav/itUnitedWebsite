// components/BenefitsSection.tsx
import React from 'react';
import styles from './BenefitsSection.module.css';

const benefitsData = [
  {
    id: 1,
    mainTitle: "Benefits of AI in Code Review: Improving Quality",
    mainDescription: "Automated code review ensures consistency and quality across projects. Unlike human reviewers who may miss issues under time pressure, AI reviews every line of code.",
    subsections: [
      {
        title: "Higher Accuracy in Bug Detection",
        description: "AI in code review leverages historical data to detect recurring patterns of errors. This leads to fewer missed bugs and higher-quality code."
      },
      {
        title: "Enforcing Coding Standards",
        description: "Consistency is key in collaborative projects. AI enforces style guidelines, ensuring that every team member writes code that aligns with project standards."
      },
      {
        title: "Reducing Technical Debt",
        description: "Automated reviews identify bad practices before they accumulate into technical debt. This helps maintain code health in the long term."
      }
    ]
  },
  {
    id: 2,
    mainTitle: "Benefits of AI in Code Review: Speeding Up Development",
    mainDescription: "Speed is a major advantage of AI in code review. Automated tools process thousands of lines of code in seconds, freeing up developers to focus on problem-solving.",
    subsections: [
      {
        title: "Faster Feedback Loops",
        description: "Instead of waiting for peer reviews, developers get instant feedback from AI tools. This shortens iteration cycles and accelerates deployment."
      },
      {
        title: "Streamlining Collaboration",
        description: "With automated feedback handling repetitive checks, human reviewers can focus on higher-level architectural discussions. This reduces bottlenecks in distributed teams."
      },
      {
        title: "Supporting Agile and DevOps Practices",
        description: "AI in code review integrates seamlessly into CI/CD pipelines. Teams adopting DevOps benefit from faster releases without compromising quality."
      }
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.container}>
        {benefitsData.map((benefit, index) => (
          <div key={benefit.id} className={styles.benefitBlock}>
            {/* Main Title and Description */}
            <div className={styles.mainContent}>
              <h2 className={styles.mainTitle}>{benefit.mainTitle}</h2>
              <p className={styles.mainDescription}>{benefit.mainDescription}</p>
            </div>

            {/* Subsections */}
            <div className={styles.subsections}>
              {benefit.subsections.map((subsection, subIndex) => (
                <div key={subIndex} className={styles.subsection}>
                  <h3 className={styles.subsectionTitle}>{subsection.title}</h3>
                  <p className={styles.subsectionDescription}>{subsection.description}</p>
                </div>
              ))}
            </div>

            {/* Add spacing between benefit blocks, except after the last one */}
            {index < benefitsData.length - 1 && <div className={styles.blockSpacer} />}
          </div>
        ))}
      </div>
    </section>
  );
}