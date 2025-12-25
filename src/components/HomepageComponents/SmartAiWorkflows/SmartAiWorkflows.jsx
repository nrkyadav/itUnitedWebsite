import React from "react";
import styles from "./SmartAiWorkflows.module.css";
import { LuTimer, LuShieldCheck, LuCode, LuTrendingUp } from "react-icons/lu";
import Image from "next/image";

const SmartAiWorkflows = ({data}) => {

  const iconMap = {
    LuTimer: LuTimer,
    LuShieldCheck: LuShieldCheck,
    LuCode: LuCode,
    LuTrendingUp: LuTrendingUp,
  };

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <h2 className={styles.heading}>
         {data?.headingeBefore}{" "}
          <span className={styles.gradientText}>{data?.heading}</span>
        </h2>
        <div className={styles.headingUnderline}></div>


        <p className={styles.subText}>
          {data?.subText}
        </p>


        <div className={styles.contentWrapper}>
          <div className={styles.leftGrid}>
          {data.services.map((service, i) => {
          const IconComponent = iconMap[service.icon]; 
          return (
            <div key={i} className={styles.serviceCard}>
              <div className={styles.serviceIcon}>
                {IconComponent ? <IconComponent /> : null}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          );
        })}
          </div>

          <div className={styles.rightImageCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={data?.image}
                alt="AI Workflow"
                fill
                className={styles.rightImage}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 40vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAiWorkflows;
