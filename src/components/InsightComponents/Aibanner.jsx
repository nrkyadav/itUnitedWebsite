import React from 'react'
import styles from './Aibanner.module.css'
const Aibanner = () => {
  return (
        <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftColumn}>
          <h1 className={styles.heading}>
            Why AI in Code Review Matters
          </h1>
        </div>
        
        <div className={styles.rightColumn}>
          <p className={styles.paragraph}>
            Software development is moving at a faster pace than ever. Companies need to release 
            updates quickly while ensuring quality and security. However, manual code reviews are 
            time-consuming, and reviewers may overlook errors due to fatigue or complexity.
          </p>
          
          <p className={styles.paragraph}>
            AI in code review helps overcome these challenges by automating error detection, 
            analyzing best practices, and suggesting fixes. According to GitHub's State of the 
            Octoverse, AI-assisted development tools have already improved productivity by reducing 
            repetitive coding tasks.
          </p>
          
          <p className={styles.paragraph}>
            By speeding up the review cycle and improving accuracy, automated code review 
            reduces costs, shortens time-to-market, and empowers developers to focus on building 
            better features.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Aibanner