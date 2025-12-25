"use client";
import React from "react";
import { NotepadText,Puzzle,Settings,FileSearchCorner,CodeXml,WandSparkles,Lightbulb,Share2 } from "lucide-react";
import styles from "./OurFrameworks.module.css";

const cardData = [
    {
        title: "On-demand Staff Augmentation",
        desc: "On-demand staff augmentation is a versatile staffing option, in which companies engage temporary or contracted personnel, to supplement their existing workforce on an as-needed basis.",
        icon: Lightbulb
    },
    {
        title: "Skill-based IT professionals",
        desc: "This approach focuses on providing professionals with focused and applicable skill sets. This customization is the greatest fit for projects requiring specialised help and expertise.",
        icon: NotepadText
    },
    {
        title: "Project-based Augmentation",
        desc: "Staff augmentation is occasionally specific to project requirements, giving organisations the freedom to hire the right people for the right jobs without committing to regular hires.",
        icon: Share2
    },
    {
        title: "Remote Staff Augmentation",
        desc: "Remote staff augmentation allows teams to scale more efficiently, by collecting people outside geographical boundaries. It's great for early-stage businesses that don't have sufficient capital to support a full-time in-house staff.",
        icon: CodeXml
    },
    {
        title: "Hybrid IT professionals",
        desc: "Hybrid staff augmentation brings together on-site and remote workers, allowing companies to handle essential operations in-house, while outsourcing others for more flexibility and cost efficiency.",
        icon: Puzzle
    },
    {
        title: "Duration-based Staff Augmentation",
        desc: "This strategy entails engaging third-party IT specialists for a set period of time. Typically monthly, quarterly, or yearly, depending on project requirements.",
        icon: WandSparkles
    }
];

const OurFrameworks = () => {
    return (
        <section className={styles.capabilitiesSection}>
            <div className={styles.overlay}>

                <p className={styles.smallHeading}>Our Frameworks</p>

                <h2 className={styles.bigHeading}>Our IT Augmentation Models</h2>

                <div className={styles.cardsGrid}>
                    {cardData.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div className={styles.card} key={index}>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                                <p className={styles.cardDesc}>{item.desc}</p>

                                <div className={styles.circleWrapper}>
                                    <div className={styles.circleBox}>
                                        <Icon className={styles.circleIcon} />
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default OurFrameworks;
