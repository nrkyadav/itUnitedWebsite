"use client";

import React from "react";
import { GitBranch } from "lucide-react";  
import styles from "./ExploreSpectrumIndustries.module.css";

const industries = [
  { title: "Startup", gif: "/assets/Images/startupgif.webp" },
  { title: "Real State", gif: "/assets/Images/realStategif.webp" },
  { title: "Food & Restaurant", gif: "/assets/Images/foodgif.webp" },
  { title: "Sport", gif: "/assets/Images/sportgif.webp" },
  { title: "Education", gif: "/assets/Images/educationgif.webp" },
  { title: "Retail", gif: "/assets/Images/retailgif.webp" },
  { title: "Gaming", gif: "/assets/Images/gaminggif.webp" },
  { title: "Agriculture", gif: "/assets/Images/agriculturegif.webp" },
  { title: "Healthcare", gif: "/assets/Images/healthcaregif.webp" },
  { title: "Travel & Hospitality", gif: "/assets/Images/travelgif.webp" },
  { title: "Entertainment", gif: "/assets/Images/entertainmentgif.webp" },
  { title: "Government", gif: "/assets/Images/governmentgif.webp" },
  { title: "Fintech", gif: "/assets/Images/fintechgif.webp" },
  { title: "Logistics", gif: "/assets/Images/logisticsgif.webp" },
  { title: "On-demand", gif: null },
];

const bgColors = ["#FFF2D1", "#E8EFFF", "#F2F2F2"];

const ExploreSpectrumIndustries = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.subheading}>Our Industry Reach</p>
        <h2 className={styles.heading}>Supporting a Wide Range of Business Sectors</h2>
        <p className={styles.description}>
         With deep industry knowledge, we deliver IT staffing strategies that fit market requirements and foster sustainable innovation and operational growth.
        </p>

        <div className={styles.grid}>
          {industries.map((item, index) => (
            <div
              key={index}
              className={styles.card}
              style={{ backgroundColor: bgColors[index % 3] }}
            >
              <div className={styles.gifBox}>
                {item.gif ? (
                  <img
                    src={item.gif}
                    alt={item.title}
                    className={styles.gif}
                  />
                ) : (
                  <GitBranch size={40} color="#000" strokeWidth={1.5} />
                )}
              </div>

              <p className={styles.cardTitle}>{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreSpectrumIndustries;
