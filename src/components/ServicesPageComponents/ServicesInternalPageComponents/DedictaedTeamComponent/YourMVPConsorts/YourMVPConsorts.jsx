"use client";
import React from "react";
import styles from "./YourMVPConsorts.module.css";
import {
  ServerCog,
  LaptopMinimalCheck,
  CircleUserRound,
  CodeXml,
  HandCoins,
  Globe,
  Receipt,
  TimerReset
} from "lucide-react";

const cardData = [
  {
    icon: CircleUserRound,
    title: "12+ Years of Expertise",
    desc: "With 12+ years of experience delivering vigorous tech talent, we have successfully helped startups, enterprises, and global brands scale their teams and deliver complex IT projects with confidence."
  },
  {
    icon: ServerCog,
    title: "Full-Cycle Talent",
    desc: "Our team offers full support throughout the engagement, from planing, onboarding, integration and performance analysis and everything in between, making sure you never miss a beat."
  },
  {
    icon: Globe,
    title: "Agile & Scalable Teams",
    desc: "Whether you need one developer or a full-stack team, our flexible staffing solutions adapt quickly to your evolving business goals and project timelines."
  },
  {
    icon: Receipt,
    title: "Cost-Efficient",
    desc: "Reduce hiring time and overheads without sacrificing quality. Our augmentation model gives you access to top-tier talent at a competitive rate optimized for your budget."
  },
  {
    icon: HandCoins,
    title: "Global Multi-Talent Pool",
    desc: "Tap into a sorted, diverse pool of experts across web, mobile, cloud, UI/UX, QA, and emerging tech ready to plug into your team and start delivering value fast."
  },
  {
    icon: TimerReset,
    title: "On-Time Results",
    desc: "You stay in control with clear reporting, dedicated project coordinators, and a proactive support team that ensures smooth collaboration and zero disruptions."
  }
];

const YourMVPConsorts = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Your Staffing Partner</p>

        <h2 className={styles.largeHeading}>
          What Sets Samyotech Apart
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
      </div>
    </section>
  );
};

export default YourMVPConsorts;
