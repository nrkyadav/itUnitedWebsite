import React from "react";
import { Row, Col, Card, Typography } from "antd";
import styles from "./FeatureSection.module.css"; // New CSS Module
import {
  FileEdit,
  GitBranch,
  Laptop,
  LineChart,
  NotepadText,
  Wind,
} from "lucide-react";

const { Title, Paragraph } = Typography;

const cardData = [
  {
    title: "Intelligent Property Filters",
    desc: "Advanced filtering options to refine searches based on user-defined parameters.",
    icon: LineChart,
  },
  {
    title: "Interactive Listings",
    desc: "Enhanced property details with multimedia galleries, pricing trends, and neighborhood insights.",
    icon: FileEdit,
  },
  {
    title: "Multi-User Access",
    desc: "Seamless collaboration among brokers, buyers, and sellers with personalized permissions.",
    icon: NotepadText,
  },
  {
    title: "Custom Analytics Reports",
    desc: "Detailed reports on sales trends and market opportunities for informed decision-making.",
    icon: Laptop,
  },
 
];

const FeatureSection = () => {
  return (
    <>
      <section className={styles.smartSection}>
        <div className={styles.overlay}>
          <div className={styles.sectionContainer}>
            <Row gutter={[40, 40]} className={styles.challengesRow}>
              <Col xs={24} md={8}>
                <Title className={styles.sectionTitle}>
                  <span className={styles.keyText}>Key Customer</span>
                  <br />
                  Challenges
                </Title>
              </Col>

              <Col xs={24} md={16}>
                <Paragraph className={styles.challengeText}>
                  Regenesys faced the challenge of developing a user-friendly
                  property broker website capable of handling complex real
                  estate transactions. Their existing systems struggled with
                  presenting vast amounts of property data in an intuitive
                  format, leading to inefficiencies in client onboarding and
                  property management. They needed a platform that could
                  simplify data handling while maintaining a professional,
                  polished appearance.
                </Paragraph>

                <Paragraph className={styles.challengeText}>
                  Another challenge was integrating advanced search and
                  filtering functionalities. Clients often found it difficult to
                  navigate through extensive property listings to find relevant
                  options. Additionally, Regenesys required a system that could
                  support seamless updates and customization to adapt to
                  evolving business needs and market demands.
                </Paragraph>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <section className={styles.capabilitiesSection}>
        <div className={styles.overlay}>
          <p className={styles.bigHeading}>
            Core Capabilities and Product Highlights
          </p>
          <div className={styles.cardsGrid}>
            {cardData.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className={styles.card} key={index}>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </>
  );
};

export default FeatureSection;
