import React from "react";
import InsightCarousel from "./InsightCarousel";
import styles from "./InsightComponents.module.css";
import IndustriesOurInsights from "../IndustriesPageComponents/IndustriesOurInsights/IndustriesOurInsights";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";
import SubscribeToNewsLetter from "../ResourcesPageComponents/SubscribeToNewsLetter/SubscribeToNewsLetter";
import InsideHeader from "./InsideHeader";

const InsightComponents = ({ data }) => {
  return (
    <>
      <div>
        <InsideHeader Title="Insights" />
        <div className={styles.curveBg}></div>
        <section className={styles.smartSection}>
          <div className={styles.overlay}>
            <InsightCarousel />
          </div>
        </section>
        <IndustriesOurInsights data={data?.ourInsightsData} />
        <SubscribeToNewsLetter />
        <ContactusComponent inSight={true} />

      </div>
    </>
  );
};

export default InsightComponents;
