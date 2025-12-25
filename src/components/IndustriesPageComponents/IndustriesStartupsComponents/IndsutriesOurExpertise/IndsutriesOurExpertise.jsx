"use client";
import React, { useState } from "react";
import styles from "./IndsutriesOurExpertise.module.css";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const IndsutriesOurExpertise = ({expertiseData}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);



    return (
        <section className={styles.engagementSection}>
            <div className={styles.overlay}>
                <h2 className={styles.heading}>
                    {expertiseData?.heading}
                </h2>
                <div className={styles.headingUnderline}></div>

                <p className={styles.description}>
                    {expertiseData?.description}
                </p>

                <div className={styles.cardsGrid}>
                    {expertiseData?.experitseCardsData?.map((industry, index) => {
                        const isProductCard = industry.title === "Talk to us";

                        return (
                            <div
                                key={index}
                                className={`${styles.card} ${isProductCard ? styles.productCard : ""}`}
                            >
                                <h3
                                    className={`${styles.cardTitle} ${isProductCard ? styles.productTitle : ""}`}
                                >
                                    {industry.title}
                                </h3>
                                <p
                                    className={`${styles.cardDesc} ${isProductCard ? styles.productDesc : ""}`}
                                >
                                    {industry.description}
                                </p>

                                {
                                    isProductCard &&

                                    <div className={styles.cardFooter}>
                                        <span className={styles.productBtn}>Schedule a call via Calendly</span>
                                    </div>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
            <p className={styles.callToAction}>
            Our custom software development {" "}
                <span className={styles.gradientText} onClick={() => setIsModalOpen(true)}>Book a call via Calendly</span> brands to reduce the odds and smoothen their journey of digitalization?
            </p>

            <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CalendlyModal />
            </CommonModal>
        </section>
    );
};

export default IndsutriesOurExpertise;
