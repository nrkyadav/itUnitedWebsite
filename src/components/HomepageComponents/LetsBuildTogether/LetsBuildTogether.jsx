"use client";
import React, { useState } from "react";
import styles from "./LetsBuildTogether.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const LetsBuildTogether = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.smallText}>Let’s Build Together.</p>
        <h2 className={styles.mainHeading}>
          We specialize in transforming ideas into powerful solutions.
        </h2>
        <p className={styles.subText}>
          Need a tech partner for your next software project?
        </p>

        <PrimaryButton
          text="Schedule a call via Calendly"
          bgColor="#ffffff"
          textGradient="linear-gradient(135deg, #006633 0%, #00c84fe8 100%)"
          onClick={() => setIsModalOpen(true)}
        />
      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </section>
  );
};

export default LetsBuildTogether;
