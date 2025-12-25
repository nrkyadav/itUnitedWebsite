"use client";
import React, { useState } from "react";
import styles from "./IndustriesLetsBuildTogether.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const IndustriesLetsBuildTogether = ({ isServicesPage = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`${styles.container} ${isServicesPage ? styles.containerServices : ""
      }`}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <p className={`${styles.smallText} ${isServicesPage ? styles.textGradient : ""
            }`}>Let’s Build Together.</p>
          <h2 className={`${styles.mainHeading} ${isServicesPage ? styles.textGradient : ""
            }`}>
            We specialize in transforming ideas into powerful solutions.
          </h2>
          <p className={`${styles.subText} ${isServicesPage ? styles.textGradient : ""
            }`}>
            Need a tech partner for your next software project?
          </p>
        </div>

        <div className={styles.right}>
          <PrimaryButton
            text="Schedule a Call via Calendly"
            bgColor={
              isServicesPage
                ? "linear-gradient(135deg, #006633 0%, #00c84fe8 100%)"
                : "#ffffff"
            }
            textGradient={
              isServicesPage
                ? "none"
                : "linear-gradient(135deg, #006633 0%, #00c84fe8 100%)"
            }
            className={isServicesPage ? styles.buttonStyle : ""}
            onClick={() => setIsModalOpen(true)}
          />
        </div>

      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </section>
  );
};

export default IndustriesLetsBuildTogether;
