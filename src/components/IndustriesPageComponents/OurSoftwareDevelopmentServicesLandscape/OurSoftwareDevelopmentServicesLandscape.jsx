"use client";
import React, { useState } from "react";
import styles from "./OurSoftwareDevelopmentServicesLandscape.module.css";
import { ArrowUpRight } from "lucide-react";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";
import Link from "next/link";



const OurSoftwareDevelopmentServicesLandscape = ({ industriesCardData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
          Our <span className={styles.gradientText}>Software Development</span> Services Landscapes
        </h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.subText}>
          As a custom software development company, we deliver cutting-edge solutions designed to propel your product to success. Leveraging agile development methodologies and personalised strategies, we combine advanced technology integration with a focus on user-centric goals to create next-generation software solutions tailored to your needs.
        </p>

        <div className={styles.cardsGrid}>
          {industriesCardData.map((industry, index) => {
            const isProductCard = industry.title === "Products" || industry.title === "Talk to us";

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
                  {industry.title === "Products" ? (
                    <button className={styles.productBtn}>View Product</button>
                  ) : industry.title === "Talk to us" ? <>
                    <span className={styles.productBtn}>Schedule a call via Calendly</span>
                  </> : (
                    <>
                      <Link href={industry.link} className={styles.viewServicesWrapper}>
                        <span className={styles.viewServices}>View Services</span>
                        <ArrowUpRight className={styles.arrowIcon} />
                      </Link>

                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <p className={styles.callToAction}>
          Ready to find the right service for your project?{" "}
          <span className={styles.gradientText} onClick={() => setIsModalOpen(true)}>Book a call via Calendly</span> with our solutions consultant to find the best fit for your needs today.
        </p>
      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </section>
  );
};

export default OurSoftwareDevelopmentServicesLandscape;
