"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProvenDevelopmentMethodology.module.css";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const ProvenDevelopmentMethodology = ({data}) => {
  const [activeCard, setActiveCard] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardAction = (id) => {
    if (isMobile) {
      setActiveCard((prev) => (prev === id ? null : id));
    } else {
      setActiveCard(id);
    }
  };

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          {data?.headingBefore}{" "}
          <span className={styles.gradientText}>{data?.heading}</span>
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          {data?.subTextbefore}{" "}
          <span className={styles.gradientText}>{data?.gradientText}</span> {data?.subText}
        </p>

        <div className={styles.cardsWrapper}>
          {data?.cards.map((card) => {
            const isActive = activeCard === card.id;
            return (
              <motion.div
                key={card.id}
                layout="position" 
                transition={{
                  layout: { duration: 0.6, ease: [0.25, 1, 0.5, 1] },
                }}
                className={`${styles.card} ${isActive ? styles.active : styles.inactive}`}
                onClick={() => handleCardAction(card.id)}
                onMouseEnter={() => !isMobile && setActiveCard(card.id)}
              >
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className={styles.cardContent}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={styles.iconWrapper}>
                        <Image
                          src={card.icon}
                          alt={card.title}
                          width={32}
                          height={32}
                          className={styles.icon}
                        />
                      </div>
                      <h3 className={styles.cardTitle}>{card.title}</h3>
                      <p className={styles.cardText}>{card.text}</p>
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.span
                  className={styles.count}
                  animate={{ opacity: isActive ? 0.3 : 0.15, scale: isActive ? 1.05 : 1 }}
                  transition={{ duration: 0.4 }}
                >
                  {card.id}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <p className={styles.callToAction}>
          Ready to find the perfect engagement model for your project?{" "}
          <span className={styles.gradientText} onClick={()=>setIsModalOpen(true)}>Book a call via Calendly</span> with our solutions consultant to find the best fit for your needs today.
        </p>
      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal  />
      </CommonModal>
    </section>
  );
};

export default ProvenDevelopmentMethodology;
