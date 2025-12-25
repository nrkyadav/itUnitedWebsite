"use client";
import React, { useState } from "react";
import styles from "./OtherServicesComponent.module.css";

import {
  Smartphone,
  Blocks,
  Users,
  RadioTower,
  PencilRuler,
  RefreshCw,
  Cpu,
  FileCog
} from "lucide-react";

const bgColors = ["#FFF2D1", "#E8EFFF", "#F2F2F2"];

const cardData = [
  { icon: Smartphone, title: "App Development" },
  { icon: Blocks, title: "Blockchain Development" },
  { icon: Users, title: "Staff Augmentation Service" },
  { icon: RadioTower, title: "IoT Device Integration" },
  { icon: PencilRuler, title: "UI/UX Design" },
  { icon: RefreshCw, title: "Software Modernization" },
  { icon: Cpu, title: "Hardware Integration" },
  { icon: FileCog, title: "Software Consulting" },
];

const OtherServicesComponent = () => {
  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>

        <p className={styles.smallHeading}>Other Services</p>

        <h2 className={styles.largeHeading}>Our Extended MVP Services</h2>

        <div className={styles.cardsGrid}>
          {cardData.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className={styles.card}
                style={{ "--hoverColor": bgColors[index % bgColors.length] }}
              >
                <Icon className={styles.icon} />
                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OtherServicesComponent;
