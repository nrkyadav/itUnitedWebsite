import styles from "./OpenPositions.module.css";
import React, { useState } from "react";
import { Card, Input, Button, Tag, Row, Col } from "antd";
import {
    SearchOutlined,
    EnvironmentOutlined,
    ClockCircleOutlined,
    ToolOutlined,
    UserOutlined,
    MailOutlined,
    ArrowRightOutlined,
} from "@ant-design/icons";

const OpenPositions = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const openPositionsData = [
        {
            title: "Power BI Architect",
            locations: ["Chennai", "Indore"],
            type: "Full Time, Remote, Part Time",
            skills: "Strong background in data modelling",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
        {
            title: ".Net Developer",
            locations: ["Chennai", "Indore", "Pune", "Delhi"],
            type: "Full Time, Remote, Part Time",
            skills: "ASP.NET, C#, Javascript, MVC",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
        {
            title: "GCP Architect",
            locations: ["Chennai", "Indore", "Pune", "Delhi"],
            type: "Full Time, Remote, Part Time",
            skills: "GCP services, Compute Engine, Kubernetes",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
        {
            title: "Gen AI Engineer",
            locations: ["Chennai", "Indore", "Pune", "Delhi"],
            type: "Full Time, Remote, Part Time",
            skills: "e.g., AWS, Azure, Google Cloud",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
        {
            title: "Salesforce Solution Architect",
            locations: ["Indore"],
            type: "Full Time, Remote, Part Time",
            skills: "HTML, CSS and JavaScript",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
        {
            title: "Golang Developer",
            locations: ["Chennai", "Indore", "Pune"],
            type: "Full Time, Remote, Part Time",
            skills: "Golang (backend), Node JS (FET)..",
            experience: "Experience 0 - 2 Years",
            email: "hr@samyotech.com",
        },
    ];

    return (
        <section className={styles.openPositionsSection}>
            <div className={styles.openPositionsOverlay}>
                <h2
                    style={{
                        fontSize: "36px",
                        fontWeight: "700",
                        color: "#0056b3",
                        marginBottom: "32px",
                        borderBottom: "3px solid #ffc107",
                        display: "inline-block",
                        paddingBottom: "8px",
                    }}
                >
                    Open Positions
                </h2>
                <br />
                <Input
                    placeholder="Search..."
                    prefix={<SearchOutlined />}
                    size="large"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                        maxWidth: "400px",
                        marginBottom: "40px",
                        borderRadius: "8px",
                        marginLeft: "0px",
                    }}
                />

                <Row gutter={[24, 24]}>
                    {openPositionsData
                        .filter((pos) =>
                            pos.title.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((position, index) => (
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
                                        style={{
                                            marginBottom: "12px",
                                            display: "flex",
                                            gap: "8px",
                                        }}
                                    >
                                        <EnvironmentOutlined
                                            style={{ color: "#666", marginTop: "4px" }}
                                        />
                                        <span style={{ color: "#666" }}>
                                            {position.locations.join(", ")}
                                        </span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: "12px",
                                            display: "flex",
                                            gap: "8px",
                                        }}
                                    >
                                        <ClockCircleOutlined
                                            style={{ color: "#666", marginTop: "4px" }}
                                        />
                                        <span style={{ color: "#666" }}>{position.type}</span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: "12px",
                                            display: "flex",
                                            gap: "8px",
                                        }}
                                    >
                                        <ToolOutlined style={{ color: "#666", marginTop: "4px" }} />
                                        <span style={{ color: "#666" }}>{position.skills}</span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: "12px",
                                            display: "flex",
                                            gap: "8px",
                                        }}
                                    >
                                        <UserOutlined style={{ color: "#666", marginTop: "4px" }} />
                                        <span style={{ color: "#666" }}>{position.experience}</span>
                                    </div>
                                    <div
                                        style={{
                                            marginBottom: "20px",
                                            display: "flex",
                                            gap: "8px",
                                        }}
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
            </div>
        </section>

    )
}


export default OpenPositions