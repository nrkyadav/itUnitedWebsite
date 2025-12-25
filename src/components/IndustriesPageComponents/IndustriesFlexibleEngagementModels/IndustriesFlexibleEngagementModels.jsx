"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./IndustriesFlexibleEngagementModels.module.css";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const IndustriesFlexibleEngagementModels = ({data}) => {
              const [isModalOpen, setIsModalOpen] = useState(false);
    
    const models = [
        {
            id: 1,
            title: "Fixed-Cost Model",
            text: "Perfect for projects with a clear scope and timeline, offering cost predictability and well-defined deliverables.",
            img: "/assets/Images/fsm.png",
        },
        {
            id: 2,
            title: "Dedicated Team Model",
            text: "Hire dedicated experts for flexible, exclusive, and collaborative project support.",
            img: "/assets/Images/dtm.png",
        },
        {
            id: 3,
            title: "Hybrid Model",
            text: "Get a dedicated team with fixed milestones and costs for each project phase.",
            img: "/assets/Images/hybrid.png",
        },
    ];

    return (
        <section className={styles.engagementSection}>
            <div className={styles.overlay}>
                <h2 className={styles.heading}>
                    {data?.heading}
                </h2>
                <div className={styles.headingUnderline}></div>

                <p className={styles.description}>
                   {data?.description}
                </p>

                <div className={styles.cardsWrapper}>
                    {data?.models?.map((model) => (
                        <div key={model.id} className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={model.img}
                                    alt={model.title}
                                    width={400}
                                    height={220}
                                    className={styles.cardImage}
                                />
                            </div>
                            <h3 className={styles.cardTitle}>{model.title}</h3>
                            <p className={styles.cardText}>{model.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <p className={styles.callToAction}>
                Ready to find the perfect engagement model for your project?{" "}
                <span className={styles.gradientText} onClick={() => setIsModalOpen(true)}>Book a call via Calendly</span> with our solutions consultant to find the best fit for your needs today.
            </p>

            <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
        </section>
    );
};

export default IndustriesFlexibleEngagementModels;
