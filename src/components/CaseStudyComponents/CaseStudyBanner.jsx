import React from "react";
import { Row, Col, Typography, Tag, Space, Image } from "antd";
import {
  SettingOutlined,
  CloudOutlined,
  CodeOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import styles from "./HeroSection.module.css"; 

const { Title, Paragraph } = Typography;
const CaseStudyBanner = () => {
  return (
  <div className={styles.heroContainer}>
      <Row justify="space-between" align="middle" className={styles.heroRow}>
        
        {/* === LEFT COLUMN: Text Content (60%) === */}
        <Col xs={24} md={14} className={styles.leftCol}>
          <Title className={styles.mainTitle}>
            Empowering Property Transactions for{' '}
            <span className={styles.highlightText}>Regenesys</span>
          </Title>

          <Paragraph className={styles.subText}>
            Regenesys, a global leader in education and innovative business solutions,
            sought to expand its offerings with a robust Property Broker Website. They
            hire staffing model to deliver a scalable and user-friendly solution.
          </Paragraph>

          {/* Tags Section */}
          <Space size={[8, 16]} wrap className={styles.tagSpace}>
            <Tag className={styles.styledTag}>REGENESYS</Tag>
            <Tag className={styles.styledTag}>REAL ESTATE</Tag>
            {/* <Tag className={styles.styledTag}>REGENEYS</Tag>
            <Tag className={styles.styledTag}>BUMEITT</Tag> */}
          </Space>

          {/* Icons Section */}
          {/* <Space size="large" className={styles.iconSpace}>
            <SettingOutlined className={styles.styledIcon} />
            <CloudOutlined className={styles.styledIcon} />
            <CodeOutlined className={styles.styledIcon} />
            <CheckCircleOutlined className={styles.styledIcon} />
          </Space> */}
        </Col>

        {/* === RIGHT COLUMN: Visual/Image (40%) === */}
        <Col xs={24} md={10} className={styles.rightCol}>
          <div className={styles.visualContainer}>
            {/* The main image using next/image for optimization */}
            <Image 
              src="/assets/Images/regenesyscasestudybanner.webp"
              alt="Futuristic property transaction visual"
              layout="fill"
              objectFit="cover"
              priority={true} // Load this primary image immediately
            />
            
            {/* Overlay to create the dark, futuristic filter */}
            <div className={styles.imageOverlay}></div>

            {/* Glowing element (representing the house/hand from Image 2) */}
            <div className={styles.glowingElement}>
              {/* You can use a dedicated icon here, like an Ant Design HomeOutlined */}
              {/* <CodeOutlined style={{ fontSize: '64px' }} />  */}
              <div className={styles.glowingEffect}></div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CaseStudyBanner;
