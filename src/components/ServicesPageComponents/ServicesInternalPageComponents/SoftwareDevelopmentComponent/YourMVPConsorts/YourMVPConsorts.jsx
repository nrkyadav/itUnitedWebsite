"use client";
import React from "react";
import styles from "./YourMVPConsorts.module.css";
import {
  ServerCog,
  LaptopMinimalCheck,
  CircleUserRound,
  CodeXml,
  HandCoins,
  Globe
} from "lucide-react";

const cardData = [
  {
    icon: CircleUserRound,
    title: "Vast Experience",
    desc: "With over a decade of experience, our MVP specialists create and improve a lean process of high-impact MVPs for a range of different industries."
  },
  {
    icon: ServerCog,
    title: "Complete Support",
    desc: "We provide full-cycle MVP services, starting with idea validation to post-launch maintenance."
  },
  {
    icon: CodeXml,
    title: "Quick Process for Development",
    desc: "We are a team of agile approaches that is adaptable and flexible enough to change with your product needs quickly."
  },
  {
    icon: LaptopMinimalCheck,
    title: "knowledgeable multi-platform group",
    desc: "We are a skilled multi-platform team with a solid understanding of creating smooth mobile and web MVPs."
  },
  {
    icon: HandCoins,
    title: "Affordable Solutions",
    desc: "Samyotech provides affordable prices without sacrificing functionality or quality."
  },
  {
    icon: Globe,
    title: "Strong Communication & Teamwork",
    desc: "You are constantly informed via transparent processes, frequent updates, and dedicated project managers."
  }
];

const YourMVPConsorts = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Your MVP Consorts</p>

        <h2 className={styles.largeHeading}>
          Why Trust Samyotech for Building Your MVP?
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

        <h3 className={styles.bottomHeading}>
          Start Building a Product that You love. !
        </h3>

        <button className={styles.calendlyBtn}>
          Schedule a call via Calendly
        </button>

      </div>
    </section>
  );
};

export default YourMVPConsorts;
