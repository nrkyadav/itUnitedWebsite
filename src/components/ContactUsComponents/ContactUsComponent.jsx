"use client";

import React, { useState } from "react";
import { FaComments, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { FaMapMarkerAlt, FaBuilding, FaGlobe } from "react-icons/fa";
import styles from "./ContactUsPage.module.css";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";
import CommonModal from "../CommonComponents/CommonModal";
import CalendlyModal from "../Forms/CalendlyForm/CalendlyModal";

const locations = [

  {
    country: "INDIA (H.Q)",
    address: "Building No. 09, Tulsiayana Residency, Nepania, Indore",
    phone: "+91 9669219263",
    icon: "/assets/Images/black-india.png",
  },
  {
    country: "EUROPE",
    address: "Orangeboom Street, Mariakerke, Ghent, Belgium",
    phone: "+91 9669219263",
    icon: "/assets/Images/black-new-zeland.png",
  },
  {
    country: "UNITED KINGDOM",
    address: "182-184 High Street North, East Ham, London, United Kingdom, E6 2JA",
    phone: "+44 740 420 5542",
    icon: "/assets/Images/black-uk.png",
  },
];

const ContactUsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);


  return (
    <main>
      <section className={styles.headerSection}>
        <div className={styles.headerContainer}>
          <div className={styles.headerLeft}>
            <h1 className={styles.title}>Contact Us</h1>
            <p className={styles.description}>
              Let's turn your innovative ideas into reality! Connect with us today to discover
              how our experienced development team can transform your vision into a
              successful solution. Whether it's a groundbreaking app or a scalable software
              system, your next big project starts here—reach out to us now and take the first
              step toward success!
            </p>
            <div className={styles.underline}></div>
          </div>

          <div className={styles.headerRight}>
            <div className={styles.ctaBox}>
              <p>Your next big project starts here—<strong className={styles.ctaHighlight}>reach out to us now!</strong></p>
            </div>
          </div>
        </div>

        <div className={styles.optionsContainer}>

          <div className={styles.optionCard}>
            <FaComments className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Chat Now</h2>
            <p className={styles.cardText}>
              <strong>Got questions?</strong> Start a live chat with our business consultant instantly!
            </p>
          </div>

          <div className={styles.optionCard}>
            <FaPhoneAlt className={styles.cardIcon} />
            <h2 className={styles.cardTitle}>Call Now</h2>
            <p className={styles.cardText}>
              <strong>Need quick assistance?</strong> Speak with our customer care team right away!
            </p>
          </div>

          <div className={styles.bookNowCard}>
            <FaCalendarAlt className={styles.bookNowIcon} />
            <h2 className={styles.bookNowTitle}>Book Now</h2>
            <p className={styles.bookNowText}>
              <strong>Ready to dive deeper?</strong> Schedule an appointment with our experts today!
            </p>
            <button className={styles.bookNowButton} onClick={() => setIsModalOpen(true)}>
              Book Free Consultation
            </button>
          </div>
        </div>

        <div className={styles.headerFooterText}>
          <p>We're here to help you every step of the way—reach out however it suits you best!</p>
        </div>
      </section>

      <ContactusComponent />

      <section className={styles.locationsSection}>
        <div className={styles.locationsSectionOverlay}>
          <div className={styles.locationHeader}>
            <h2 className={styles.locationTitle}>Our Location's</h2>
            <div className={styles.locationUnderline}></div>
            <p className={styles.locationSubtitle}>
              We are expanding fast, at the moment we have our contact offices in following location.
            </p>
          </div>

          <div className={styles.locationGrid}>
            {locations.map((loc, index) => (
              <div key={index} className={styles.locationItem}>
                <h3 className={styles.countryName}>{loc.country}</h3>
                <div className={styles.addressWrapper}>
                  {loc.icon ? (
                    <img src={loc.icon} alt={`${loc.country} icon`} className={styles.countryIcon} />
                  ) : (
                    <FaMapMarkerAlt className={styles.addressIcon} />
                  )}
                  <div className={styles.addressText}>
                    <p>{loc.address.split(',').map((line, i) => <span key={i}>{line.trim()}<br /></span>)}</p>
                    <p className={styles.phoneNumber}>{loc.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </main>
  );
};

export default ContactUsPage;
