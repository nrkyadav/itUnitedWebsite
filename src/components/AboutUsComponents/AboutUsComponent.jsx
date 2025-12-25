import React from "react";
import AboutUsHeroBanner from "./AboutUsHeroBanner";
import { Col, Divider, Row } from "antd";
import styles from "./AboutSection.module.css";
import SomeHappyClients from "../IndustriesPageComponents/SomeHappyClients/SomeHappyClients";
import LetsBuildTogether from "../HomepageComponents/LetsBuildTogether/LetsBuildTogether";
import ContactusComponent from "../HomepageComponents/ContactusComponent/ContactusComponent";
import { Card } from "antd";

const data = [
  {
    title: "Client-Centric Excellence",
    content:
      "At IT United, we put your business and its customers at the heart of everything we do. We go beyond understanding your immediate needs—we start by diving into your customers’ perspectives, identifying their pain points, and developing solutions that address these challenges. Our goal is to create software that not only meets your requirements but also drives lasting value for your end-users.",
  },
  {
    title: "Seamless Collaboration",
    content:
      "We believe that communication is the cornerstone of successful partnerships. While it may seem like we over-communicate at times, we’ve learned that clear, consistent interaction is what drives success. Our team collaborates seamlessly with clients across the globe, ensuring that every project is transparent, aligned, and executed with precision, no matter the distance.",
  },

  {
    title: "On-Time, High-Quality Delivery",
    content:
      "With over 20 plus years of experience, we’ve honed the art of delivering top-tier software solutions with unwavering quality. Our internal frameworks and world-class infrastructure empower us to deliver on time, every time. At IT United, quality isn’t just a promise—it’s a commitment we uphold by anticipating challenges and executing with efficiency, ensuring your project meets and exceeds expectations.",
  },
];
const AboutUsComponent = ({ components }) => {
  return (
    <>
      <AboutUsHeroBanner />

      <div className={styles.container}>
        <Row gutter={[64, 32]} align="top" justify="center">
          {/* Left Side - Who We Are */}
          <Col xs={24} md={11}>
            <h2 className={styles.title}>Who We Are</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>
              At IT United, we are a passionate team of innovators, developers,
              and problem-solvers committed to transforming ideas into impactful
              software solutions. With years of expertise and a deep
              understanding of the tech landscape, we strive to make a
              difference in every project we undertake.
            </p>
            <p className={styles.text}>
              Our team is driven by a shared mission to empower businesses
              through cutting-edge technology, delivering high-quality, scalable
              solutions that meet the evolving needs of our clients.
            </p>
          </Col>

          <Col xs={0} md={2}>
            <Divider
              type="vertical"
              className={styles.verticalLine}
              variant="solid"
            />
          </Col>

          <Col xs={24} md={11}>
            <h2 className={styles.title}>What We Do</h2>
            <div className={styles.underline}></div>
            <p className={styles.text}>
              We specialize in crafting tailored software solutions that help
              businesses accelerate growth, optimize operations, and create
              lasting value. From MVP development to custom software and
              enterprise solutions, our services are designed to address the
              unique challenges and goals of each client.
            </p>
            <p className={styles.text}>
              By combining agile methodologies with a focus on innovation, we
              deliver scalable, secure, and efficient software products that
              drive success and enhance user experiences.
            </p>
          </Col>
        </Row>
      </div>
      <section className={styles.smartSection}>
        <div className={styles.overlay}>
          {/* <ContactusComponent inSight={true} /> */}
          <h2 className={styles.whyChooseUsTitle}>
            Why Choose <span>Samyotech</span>: Our Core Values
          </h2>
          <div className={styles.whyChooseUsTitleUnderline}></div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {data?.map((item) => (
              <Card
                style={{
                  width: 400,
                  height: 300,
                  margin: "20px",
                  backgroundColor: "#002c22",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "15px",
                }}
              >
                <p
                  style={{
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white",
                  }}
                >
                  {item.title}
                </p>
                <p style={{ color: "white" }}>{item.content}</p>
              </Card>
            ))}
          </div>
          <p className={styles.quote}>
            “You’ve got to start with the customer experience and work back
            toward the technology – not the other way around.”
            <br /> — <strong>Steve Jobs</strong>
          </p>
        </div>
      </section>
      <br /><br />
      <LetsBuildTogether />
      <section className={styles.smartSection}>
        <div className={styles.overlay}>
          <ContactusComponent inSight={true} />
        </div>
      </section>
    </>
  );
};

export default AboutUsComponent;
