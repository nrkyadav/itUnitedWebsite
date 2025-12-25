"use client";
import React, { useState } from "react";
import styles from "./LetsTalkAbout.module.css";
import PrimaryButton from "@/components/ButtonComponents/PrimaryButton";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";
import Image from "next/image";

const LetsTalkAbout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.wrapper}>

        <div className={styles.left}>
          <h2 className={styles.mainHeading}>
            Let’s talk about what’s next for you
          </h2>
          <p className={styles.subText}>
            Book a discovery call and let’s shape your success together.
          </p>
        </div>

        <div className={styles.arrowBox}>
          <Image
            src="/assets/Images/arrowGif.webp"
            alt="arrow gif"
            width={200}
            height={100}
            unoptimized
            className={styles.arrowGif}
          />
        </div>
        <div className={styles.right}>
          <PrimaryButton
            text="Schedule a Call via Calendly"
            bgColor="#ffffff"
            textGradient="linear-gradient(135deg, #006633 0%, #00c84fe8 100%)"
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

export default LetsTalkAbout;
