"use client";
import React from "react";
import { Card, Button, Tag, Row, Col } from "antd";
import {
  EnvironmentOutlined,
  ClockCircleOutlined,
  ToolOutlined,
  UserOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import SomeCaseStudies from "../HomepageComponents/SomeCaseStudies/SomeCaseStudies";
import OurBlogs from "../ServicesPageComponents/ServicesInternalPageComponents/AIAutomationPageComponents/OurBlogs/OurBlogs";
import OpenPositions from "./OpenPositions/OpenPositions";

const CareersComponent = ({ data }) => {

  const latestPositions = [
    {
      title: "Java Automation with Cloud",
      locations: ["Indore", "Pune", "Chennai", "Vadodara"],
      type: "Full Time, Remote, Part Time",
      skills: "AWS/Azure/GCP",
      experience: "Experience 0 - 2 Years",
      email: "hr@samyotech.com",
    },
    {
      title: "PowerApps Developer",
      locations: ["Chennai", "Indore", "Pune"],
      type: "Full Time, Remote, Part Time",
      skills: "Power Apps, Power Automate",
      experience: "Experience 0 - 2 Years",
      email: "hr@samyotech.com",
    },
    {
      title: "Java Automation Lead",
      locations: ["Indore", "Mumbai"],
      type: "Full Time, Remote",
      skills: "BDD framework, Java, Selenium",
      experience: "Experience 0 - 2 Years",
      email: "hr@samyotech.com",
    },
  ];


  const stats = [
    { label: "Years of experience", value: "12+" },
    { label: "Apps delivered", value: "850+" },
    { label: "Remote Developer", value: "120+" },
    { label: "Passionate Delivery", value: "100%" },
  ];

  return (
    <div style={{ background: "#f5f7fa", minHeight: "100vh" }}>
      {/* Hero Section */}
      <section
        style={{
          backgroundColor: "rgb(26, 35, 50)",
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
              Careers At IT United
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
              accelerate their growth through scalable, secure, and
              user-friendly software. With a strong focus on quality and
              agility, we collaborate with clients to create tailored solutions
              that drive success and meet the evolving needs of the digital
              landscape. Explore who we are and what we do, and discover how we
              can help bring your vision to life.
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
              src="/assets/Images/career-at-samyotech.png"
              alt="Career at IT United"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </section>

      {/* Latest Positions */}
      <section
        style={{ padding: "80px 20px", maxWidth: "1200px", margin: "0 auto" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "40px",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>
            <h2
              style={{
                fontSize: "36px",
                fontWeight: "700",
                color: "#0056b3",
                marginBottom: "8px",
                borderBottom: "3px solid #ffc107",
                display: "inline-block",
                paddingBottom: "8px",
              }}
            >
              Latest Positions
            </h2>
            <p style={{ fontSize: "16px", color: "#666", marginTop: "16px" }}>
              At IT United, we deliver innovation and value through a strategic
              approach, empowering our greatest strength–our team. Rooted in
              strong culture and values, we foster growth and excellence.
            </p>
          </div>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button
              size="large"
              style={{
                borderRadius: "8px",
                fontWeight: "500",
                border: "1px solid #0056b3",
                color: "#0056b3",
              }}
            >
              Key Highlights <ArrowRightOutlined />
            </Button>
            <Button
              size="large"
              style={{
                borderRadius: "8px",
                fontWeight: "500",
                border: "1px solid #0056b3",
                color: "#0056b3",
              }}
            >
              Why Work With us <ArrowRightOutlined />
            </Button>
            <Button
              size="large"
              style={{
                borderRadius: "8px",
                fontWeight: "500",
                border: "1px solid #0056b3",
                color: "#0056b3",
              }}
            >
              Diversity & Inclusion <ArrowRightOutlined />
            </Button>
          </div>
        </div>

        <div style={{ marginBottom: "20px" }}>
          <Button
            size="large"
            style={{
              borderRadius: "8px",
              fontWeight: "500",
              border: "1px solid #0056b3",
              color: "#0056b3",
            }}
          >
            Social Impact <ArrowRightOutlined />
          </Button>
        </div>

        <Row gutter={[24, 24]}>
          {latestPositions.map((position, index) => (
            <Col xs={24} md={8} key={index}>
              <Card
                style={{
                  borderRadius: "12px",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                  height: "100%",
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <h3
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    marginBottom: "16px",
                    color: "#0056b3",
                  }}
                >
                  {position.title}
                </h3>
                <div
                  style={{ marginBottom: "12px", display: "flex", gap: "8px" }}
                >
                  <EnvironmentOutlined
                    style={{ color: "#666", marginTop: "4px" }}
                  />
                  <span style={{ color: "#666" }}>
                    {position.locations.join(", ")}
                  </span>
                </div>
                <div
                  style={{ marginBottom: "12px", display: "flex", gap: "8px" }}
                >
                  <ClockCircleOutlined
                    style={{ color: "#666", marginTop: "4px" }}
                  />
                  <span style={{ color: "#666" }}>{position.type}</span>
                </div>
                <div
                  style={{ marginBottom: "12px", display: "flex", gap: "8px" }}
                >
                  <ToolOutlined style={{ color: "#666", marginTop: "4px" }} />
                  <span style={{ color: "#666" }}>{position.skills}</span>
                </div>
                <div
                  style={{ marginBottom: "12px", display: "flex", gap: "8px" }}
                >
                  <UserOutlined style={{ color: "#666", marginTop: "4px" }} />
                  <span style={{ color: "#666" }}>{position.experience}</span>
                </div>
                <div
                  style={{ marginBottom: "20px", display: "flex", gap: "8px" }}
                >
                  <MailOutlined style={{ color: "#666", marginTop: "4px" }} />
                  <span style={{ color: "#666" }}>
                    Apply on {position.email}
                  </span>
                </div>
                <Button
                  type="link"
                  style={{ padding: 0, fontWeight: "500", color: "#0056b3" }}
                >
                  Apply Now <ArrowRightOutlined />
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </section>

      {/* Open Positions */}
      <OpenPositions />

      {/* Our Blogs */}
      <OurBlogs />


    </div>
  );
};

export default CareersComponent;
