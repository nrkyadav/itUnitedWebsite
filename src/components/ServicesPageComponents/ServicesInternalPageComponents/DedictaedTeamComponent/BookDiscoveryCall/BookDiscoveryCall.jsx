"use client";
import React, { useState } from "react";
import styles from "./BookDiscoveryCall.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const BookDiscoveryCall = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.subText}>
          Take Charge - Book your IT Staffing Consultation now..!
        </p>

        <PrimaryButton
          text="Book a Discovery Call"
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

export default BookDiscoveryCall;
