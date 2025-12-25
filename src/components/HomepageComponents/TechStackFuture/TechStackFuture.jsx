"use client";
import React, { useState } from "react";
import styles from "./TechStackFuture.module.css";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const TechStackFuture = ({data}) => {
      const [isModalOpen, setIsModalOpen] = useState(false);
  
  return (
    <section className={styles.techStackSection}>
      <div className={styles.overlay}>
        <h1 className={styles.heading}>
          {data?.heading}
        </h1>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          {data?.headingBefore} <span className={styles.gradientText}>{data?.gradientText}</span>, {data?.subText}
        </p>

        <div className={styles.techGrid}>
          {data?.technologies?.map((tech, index) => (
            <div key={index} className={styles.techBox}>
              {tech}
            </div>
          ))}
        </div>

        <p className={styles.callToAction}>
          Ready to find the perfect engagement model for your project?{" "}
          <span className={styles.gradientText} onClick={()=>setIsModalOpen(true)}>Book a call via Calendly</span> with our solutions
          consultant to find the best fit for your needs today.
        </p>
      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal  />
      </CommonModal>
    </section>
  );
};

export default TechStackFuture;
