"use client";
import React from "react";
import styles from "./YourTrustedPartner.module.css";
import { 
  User, 
  ServerCog, 
  ListChecks, 
  Briefcase, 
  LaptopMinimalCheck,
  Headphones 
} from "lucide-react";

const cardData = [
  {
    icon: User,
    title: "Expert Team Excellence",
    desc: "Our experts bring deep technical knowledge and real industry experience to every project, ensuring smart and effective solutions."
  },
  {
    icon: ServerCog,
    title: "Custom Development",
    desc: "We understand the unique requirements for each project and create customized solutions specially designed to achieve your business goals."
  },
  {
    icon: ListChecks,
    title: "Proven Results",
    desc: "Our work cuts time - performance tasks and increases the team's productivity from the first week. We focus on practical reforms showing clear results."
  },
  {
    icon: Briefcase,
    title: "Simplified Implementation",
    desc: "We focus on practical AI tools that deliver real improvements to your operations. Our implementation process helps you clearly see how automation drives business growth."
  },
  {
    icon: LaptopMinimalCheck,
    title: "Continuous Performance",
    desc: "Our team can handle anything from setup to maintenance and everything in between. We ensure that your automated systems can run smoothly and efficiently without disturbing your current business processes."
  },
  {
    icon: Headphones,
    title: "Support & Training",
    desc: "We provide full training and optional ongoing support so your team can confidently use and get the most out of every AI and automation solution from day one."
  }
];

const YourTrustedPartner = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Your Trusted Partner</p>

        <h2 className={styles.largeHeading}>
          Why Samyotech For AI & Automation Services?
        </h2>

        <div className={styles.cardsGrid}>
          {cardData.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className={styles.card}>
                <Icon className={styles.icon} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            );
          })}
        </div>

        <button className={styles.calendlyBtn}>
          Schedule a call via Calendly
        </button>

        <h3 className={styles.bottomHeading}>
          Transform How You Work with Intelligent Automation
        </h3>

      </div>
    </section>
  );
};

export default YourTrustedPartner;
