"use client";
import React from "react";
import { NotepadText,Puzzle,Settings,FileSearchCorner,CodeXml,WandSparkles } from "lucide-react";
import styles from "./OurFrameworks.module.css";

const cardData = [
    {
        title: "Custom-Developed MVP",
        desc: "Build fully functional MVP customized to your business tech stack, its ideal for complex products needing backend integration.",
        icon: Settings
    },
    {
        title: "Prototype MVP Development",
        desc: "Create clickable or visual prototypes to validate the product concept before coding. Ideal for startups looking for investors or stakeholder.",
        icon: NotepadText
    },
    {
        title: "Landing Page MVP",
        desc: "A simple web page describes the product and captures user interest via signups. Useful for testing demand before development.",
        icon: FileSearchCorner
    },
    {
        title: "No-Code/Low-Code MVP Development",
        desc: "Use no-code or low-code model platforms to launch faster without full-scale engineering. Best suited for testing simple business ideas.",
        icon: CodeXml
    },
    {
        title: "Single-Feature MVP Development",
        desc: "This model focuses on one core feature that solves the main problem. It helps to test market demand quickly with low investment.",
        icon: Puzzle
    },
    {
        title: "Wizard of Oz MVP",
        desc: "Users interact with a real product, while everything behind the scenes is done manually. Tests usability without building the tech.",
        icon: WandSparkles
    }
];

const OurFrameworks = () => {
    return (
        <section className={styles.capabilitiesSection}>
            <div className={styles.overlay}>

                <p className={styles.smallHeading}>Our Frameworks</p>

                <h2 className={styles.bigHeading}>Engaging Models for MVP Development</h2>

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
