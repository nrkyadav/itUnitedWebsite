"use client";
import React from "react";
import Image from "next/image";
import styles from "./ResourcesEvents.module.css";

const events = [
  {
    image: "/assets/Images/gitexglobal.webp",
    title: "GITEX GLOBAL 2025: The World’s Premier Tech & Startup Event",
    date: "🗓 October 13, 2025 9:00 am",
    location: "⚲ United Arab Emirates at Dubai World Trade Center",
  },
  {
    image: "/assets/Images/techspomeet.webp",
    title: "Tech Innovation Summit 2025: Shaping the Future of AI",
    date: "🗓 November 21, 2025 10:00 am",
    location: "⚲ Singapore Expo Convention & Exhibition Centre",
  },
];

const ResourcesEvents = () => {
  return (
    <section className={styles.engagementSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>Events</h2>
        <div className={styles.headingUnderline}></div>

        <p className={styles.description}>
          Delight users, deliver value, and accelerate your innovation with
          software development services that outperform functionalities and
          capabilities.
        </p>

        <div className={styles.cardsGrid}>
          {events.map((event, i) => (
            <div key={i} className={styles.card}>
              <Image
                src={event.image}
                alt={event.title}
                width={600}
                height={300}
                className={styles.cardImage}
              />
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{event.title}</h3>
                <p className={styles.cardDate}>{event.date}</p>
                <p className={styles.cardLocation}>{event.location}</p>
                <button className={styles.viewEventBtn}>View Event</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesEvents;
