import { Col, Row } from "antd";
import React from "react";
// import styles from "./AboutUsHeroBanner.module.css";

const AboutUsHeroBanner = () => {
  const stats = [
    { label: "Years of experience", value: "12+" },
    { label: "Apps delivered", value: "850+" },
    { label: "Remote Developer", value: "120+" },
    { label: "Passionate Delivery", value: "100%" },
  ];

  return (
    <section
      style={{
        background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        color: "white",
        padding: "60px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <h1
            style={{
              fontSize: "48px",
              fontWeight: "700",
              marginBottom: "24px",
              lineHeight: "1.2",
            }}
          >
            About Us
          </h1>
          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              marginBottom: "40px",
              opacity: 0.9,
            }}
          >
            At <strong>Samyotech</strong>, we specialize in turning innovative
            ideas into impactful software solutions. Our team of experienced
            developers and tech experts is dedicated to helping businesses
            accelerate their growth through scalable, secure, and user-friendly
            software. With a strong focus on quality and agility, we collaborate
            with clients to create tailored solutions that drive success and
            meet the evolving needs of the digital landscape. Explore who we are
            and what we do, and discover how we can help bring your vision to
            life.
          </p>

          <Row gutter={[24, 24]}>
            {stats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <div style={{ textAlign: "center" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      opacity: 0.8,
                      marginBottom: "8px",
                    }}
                  >
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "36px", fontWeight: "700" }}>
                    {stat.value}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>

        <div
          style={{
            flex: 1,
            minWidth: "300px",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/Images/about-hero-banner.png"
            alt="About Us"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      {/* 
      <div
        //  className={styles.curveBg}
        style={{
          zIndex: "10",
          gap: "40px",
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "50px 5% 0",
          display: "flex",

          position: "relative",
          transform: "translateY(50px)",
        }}
      ></div> */}
    </section>
  );
};

export default AboutUsHeroBanner;
