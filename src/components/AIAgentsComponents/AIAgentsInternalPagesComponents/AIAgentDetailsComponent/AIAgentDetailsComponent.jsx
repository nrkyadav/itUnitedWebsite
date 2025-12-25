
"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./AIAgentDetailsComponent.module.css";
import Image from "next/image";
import Link from "next/link";
import { Download, ArrowRight } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { AGENTS } from "@/constants/AIAgentsContent/AIAgentsContent";

const AIAgentDetailsComponent = ({ agentId }) => {
  const leftScrollRef = useRef(null);
  const agent = AGENTS.find((item) => item.id === agentId);


  if (!agent) return <p>Agent not found!</p>;

  const similarAgents = AGENTS.filter((item) => item.id !== agentId);

  useEffect(() => {

    const leftBox = leftScrollRef.current;
    if (!leftBox) return;

    const handleWheel = (e) => {
      e.stopPropagation();
    };

    leftBox.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      leftBox.removeEventListener('wheel', handleWheel);
    };
  }, []);




  const handleDownloadTemplate = () => {
    if (!agent.templateJson) return;
    const link = document.createElement('a');
    link.href = agent.templateJson;
    link.download = `${agent.id}-template.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }


  return (
    <div className={styles.mainWrapper}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>{agent?.title}</h1>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.secondWrapper}>
        <div className={styles.leftScrollBox} ref={leftScrollRef}>
          <div className={styles.imageWrapper}>
            <Image
              src={agent?.image}
              alt={agent?.title}
              width={1200}
              height={3000}
              className={styles.longImage}
            />
          </div>

          <div className={styles.connectCard}>
            <Image
              src="/assets/Images/whatsapp-bg.png"
              alt="WhatsApp Background"
              width={1200}
              height={400}
              className={styles.connectBgImage}
            />
            <div className={styles.connectOverlay}>
              <div className={styles.connectContent}>
                <p className={styles.connectSubtitle}>Connect With Us On</p>
                <h2 className={styles.connectTitle}>WhatsApp</h2>
                <p className={styles.connectDescription}>
                  {agent?.title} with AI
                </p>

              </div>
            </div>
          </div>


        </div>

        <div className={styles.rightSidebar}>
          <div>
            <h3 className={styles.sectionTitle}>Key Features</h3>
            <ul className={styles.verticalList}>
              {agent?.keyFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.customAgentBox}>
            <h3 className={styles.whiteHeading}>Need a Custom AI Agent?</h3>
            <p className={styles.whiteSubText}>
              From idea to execution — we build custom AI & software solutions for your business.
            </p>
          </div>

          <div className={styles.youtubeConnectCard} data-testid="youtube-connect-card">
            <a
              href={agent?.youtubeLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/assets/Images/youtube-bg.png"
                alt="YouTube Background"
                width={400}
                height={400}
                className={styles.youtubeCardBg}
              />
              <div className={styles.youtubeCardOverlay}>
                <div className={styles.youtubeCardContent}>
                  <p className={styles.youtubeCardTitle}>{agent?.title}</p>
                  <div className={styles.youtubeBtnStyle}
                  >
                    <FaYoutube size={20} />
                    Watch Now
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className={styles.infoBox}>
            <ul className={styles.infoList}>
              <li>
                <strong>Users:</strong>
                <span>{agent?.author}</span>
              </li>
              <li>
                <strong>Setup Time:</strong>
                <span>{agent?.duration}</span>
              </li>
              <li>
                <strong>Category:</strong>
                <span>{agent?.categories.join(", ")}</span>
              </li>
              <li>
                <strong>Platforms:</strong>
                <span>{agent?.platforms.join(", ")}</span>
              </li>
              {/* <li>
                <strong>Tools:</strong>
                <span>OpenAI, Voiceflow</span>
              </li> */}
            </ul>

            <button
              className={`${styles.downloadBtn} ${!agent?.templateJson ? styles.downloadBtnDisabled : ''}`}
              onClick={handleDownloadTemplate}
              disabled={!agent?.templateJson}

            >
              <Download size={18} />
              Download Template
            </button>
          </div>

          <div className={styles.similarBox}>
            <h3 className={styles.similarHeading}>Similar AI Agents</h3>

            <div className={styles.similarList}>
              {similarAgents.map((item) => (
                <Link href={item.link} key={item.id} className={styles.similarItem}>
                  <span>{item.title}</span>
                  <ArrowRight size={18} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAgentDetailsComponent;