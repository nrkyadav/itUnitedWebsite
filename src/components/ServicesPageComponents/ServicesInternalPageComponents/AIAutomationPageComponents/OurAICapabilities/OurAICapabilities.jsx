"use client";
import React from "react";
import { LineChart, FileEdit, NotepadText, Laptop, GitBranch, Wind } from "lucide-react";
import styles from "./OurAICapabilities.module.css";

const cardData = [
    {
        title: "AI Automation Consultation",
        desc: "We provide expert consultation to identify tailored automation options to fit your industry. Our dedicated AI consultants thoroughly analyze your business processes, recommend scalable solutions, and create an AI-driven way that ensures spontaneous integration and long-term success.",
        icon: LineChart
    },
    {
        title: "AI Process Automation",
        desc: "We automate repetitive functions and workflows, increasing efficiency and reducing operating costs. Our AI solutions streamline business operations, improving accuracy and promoting productivity.",
        icon: FileEdit
    },
    {
        title: "AI-Powered Product Development",
        desc: "We specialize in developing AI-powered digital products using advanced machine learning models. Whether it's AI-driven applications, predictive data analysis, or smart automation tools, our experts create solutions that transform business performance.",
        icon: NotepadText
    },
    {
        title: "AI Integration Services",
        desc: "We provide seamless AI integration into your existing software ecosystem. Our automation experts optimize AI-driven workflows, enabling smooth data flow between applications while maximizing efficiency.",
        icon: Laptop
    },
    {
        title: "CRM Automation",
        desc: "We automate CRM processes, enhancing lead management, customer engagement, and sales tracking. Our AI-powered solutions predict customer behavior and improve conversions.",
        icon: GitBranch
    },
    {
        title: "Generative AI Development",
        desc: "We develop AI-driven generative models that transform content creation, product design, and business automation using state-of-the-art algorithms.",
        icon: Wind
    }
];

const OurAICapabilities = () => {
    return (
        <section className={styles.capabilitiesSection}>
            <div className={styles.overlay}>

                <p className={styles.smallHeading}>Our AI Capabilities</p>

                <h2 className={styles.bigHeading}>AI Automation Services We Offer</h2>

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

export default OurAICapabilities;
