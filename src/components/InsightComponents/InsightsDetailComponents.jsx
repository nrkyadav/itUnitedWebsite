import React from 'react';
import styles from './InsightsDeatils.module.css';
import Aibanner from './Aibanner';
import BenefitsSection from './BenefitsSection';
import { postData } from './postData';

// Component to simulate the dark, code-themed graphic using pure CSS
const CodeReviewGraphic = ({ className = '' }) => (
  <div className={`${styles.graphicContainer} ${className === 'h-72' ? styles.h72 : ''}`}>
    {/* Server Tower Simulation (Left side) */}
    <div className={styles.serverTower}>
      <div className={styles.serverPaddings}>
        <div className={styles.serverSlot1}></div>
        <div className={styles.serverSlot1}></div>
        <div className={styles.serverSlot1}></div>
        <div className={styles.serverSlot2}></div>
      </div>
      <div className={styles.serverBase}>
        <div className={`${styles.serverLed} ${styles.serverLedRed}`}></div>
        <div className={`${styles.serverLed} ${styles.serverLedGreen}`}></div>
      </div>
    </div>

    {/* Laptop/Screen Simulation (Right side) */}
    <div className={styles.laptopScreen}>
      {/* Green Code Lines */}
      <div className={styles.codeDisplay}>
        {Array(10).fill(0).map((_, i) => (
          <p key={i} className={`${styles.codeLine} ${styles[`codeLine${i}`] || ''}`}>
            <span style={{color: '#FBBF24'}}>{'['}</span>
            <span style={{color: '#60A5FA'}}>{`Review #${100 - i}`}</span>
            <span style={{color: '#FBBF24'}}>{']'}</span>
            <span style={{color: '#6B7280', marginLeft: '0.5rem'}}>$&gt;</span> Analyzing pull request line {100 + i * 5}
          </p>
        ))}
        <p style={{color: '#EF4444', marginTop: '0.5rem'}}>Error: Potential memory leak in line 145</p>
        <p style={{color: '#10B981'}}>Success: Coding standard check passed.</p>
      </div>
      
      {/* Keyboard Area */}
      <div className={styles.keyboardArea}>
        <div className={styles.keyboardKeys}>
          {Array(10).fill(0).map((_, i) => (
            <div key={i} className={styles.keyCap}></div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const InsightComponents = () => {
  return (
    <>
    <div className={styles.curveBg}>
      <section className={styles.smartSection}>
        <div className={styles.articleContainer}>

          {/* Header Tags */}
          <div className={styles.tagsContainer}>
            <span className={`${styles.tagBase} ${styles.tagDate}`}>
              {postData.date}
            </span>
            <span className={`${styles.tagBase} ${styles.tagReadTime}`}>
              {/* Using inline SVG for icon */}
              <svg xmlns="http://www.w3.org/2000/svg" style={{height: '1rem', width: '1rem', display: 'inline-block', marginRight: '0.25rem', verticalAlign: 'middle'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              {postData.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className={styles.articleTitle}>
            {postData.title}
          </h1>

          {/* Author Info */}
          <div className="author-info">
            <p className={styles.authorName}>
              {postData.author}
            </p>
            <p className={styles.authorTitle}>
              {postData.authorTitle}
            </p>
          </div>

          {/* Main Image (Custom Graphic) */}
          <div style={{marginBottom: '2.5rem'}}>
            <CodeReviewGraphic />
          </div>

          {/* Introduction Paragraph */}
          <p className={styles.introParagraph}>
            {postData.introParagraph}
          </p>

          {/* Section 1: How Automated Code Review Works */}
          <div className={styles.section1Layout}>
            <div className={styles.section1Text}>
              <h2 className={styles.sectionTitle}>
                {postData.section1Title}
              </h2>
              <p className={`${styles.sectionText} mb-4`}>
                {postData.section1Text.split('Machine learning models')[0].trim()}
              </p>
              <p className={styles.sectionText}>
                {'Machine learning models' + postData.section1Text.split('Machine learning models')[1].trim()}
              </p>
            </div>
            <div className={styles.section1Graphic}>
              {/* Smaller version of the graphic */}
              <CodeReviewGraphic className="h-72" />
            </div>
          </div>

          {/* Section 2: The Need for Speed and Accuracy */}
          <div style={{marginBottom: '2.5rem'}}>
            <h2 className={styles.sectionTitle}>
              {postData.section2Title}
            </h2>
            
            <div className={styles.sectionText}>
              {postData.section2Content.split('\n').map((line, index) => {
                if (line.startsWith('- **')) {
                  const parts = line.split(':');
                  const title = parts[0].replace('- **', '').replace('**', '');
                  const description = parts.slice(1).join(':').trim();
                  return (
                    <div key={index} className={styles.bulletItem}>
                      <span className={styles.bulletIcon}>•</span>
                      <div className={styles.bulletText}>
                        <p>
                          <span className="bold">{title}:</span> {description}
                        </p>
                      </div>
                    </div>
                  );
                }
                return (
                  <p key={index} style={{marginBottom: '1rem'}}>
                    {line}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
    <Aibanner />
    <BenefitsSection />
    </>
  );
};

export default InsightComponents;