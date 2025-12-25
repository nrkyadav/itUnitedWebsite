"use client";
import React, { useState } from "react";
import styles from "./OurServicesLandscapes.module.css";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const OurServicesLandscapes = ({ servicesLandscapesData }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);



    return (
        <section className={styles.engagementSection}>
            <div className={styles.overlay}>
                <h2 className={styles.heading}>
                    {servicesLandscapesData?.heading}
                </h2>
                <div className={styles.headingUnderline}></div>

                <p className={styles.description}>
                    {servicesLandscapesData?.description}
                </p>

                <div className={styles.cardsGrid}>
                    {servicesLandscapesData?.servicesLandscapesCardData?.map((industry, index) => {
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
                                <div className={styles.cardFooter}>
                                    {isProductCard ? (
                                        <span className={styles.productBtn}>Schedule a call via Calendly</span>
                                    ) : (
                                        <Link href={industry.link} className={styles.viewServicesWrapper}>
                                            <span className={styles.viewServices}>View Services</span>
                                            <ArrowUpRight className={styles.arrowIcon} />
                                        </Link>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            <p className={styles.callToAction}>
            Ready to find the right service for your project? {" "}
                <span className={styles.gradientText} onClick={() => setIsModalOpen(true)}>Book a call via Calendly</span> with our solutions consultant to find the best fit for your needs today.
            </p>

            <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <CalendlyModal />
            </CommonModal>
        </section>
    );
};

export default OurServicesLandscapes;
