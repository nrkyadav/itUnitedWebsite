"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  const socialLinks = [
    { href: "https://www.instagram.com/theitunited?igsh=MWJjeTdvdHViaG0yNg%3D%3D&utm_source=qr", icon: "/assets/Images/instagram.svg" },
    { href: "https://www.linkedin.com/company/theitunited/", icon: "/assets/Images/linkedin.png" },
  ];

  const locations = [
    {
      country: "INDIA",
      address: "Building No. 09, Tulsiayana Residency, Nepania, Indore",
      phone: "+91 9669219263",
      cityImg: "/assets/Images/indore.png",
    },
    {
      country: "EUROPE",
      address: "Orangeboom Street, Mariakerke, Ghent, Belgium",
      phone: "+91 9669219263",
      cityImg: "/assets/Images/canada.png",
    },
    {
      country: "UNITED KINGDOM",
      address: "182-184 High Street North, East Ham, London, United Kingdom, E6 2JA",
      phone: "+44 740 420 5542",
      cityImg: "/assets/Images/london.png",
    },

  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerLeft}>
          <div className={styles.logoFooter}>
            <Image
              src="/assets/Images/whitelog.png"
              alt="IT United Logo"
              width={250}
              height={60}
              className={styles.footerLogoImg}
            />
            {/* <div style={{ fontFamily: "'Spectral', serif", fontWeight: 800, fontSize: "28px", color: "#ffffff", letterSpacing: "1px", textTransform: "uppercase", display: "flex", alignItems: "center" }}>
              The Un<span style={{ color: "#00c84f" }}>it</span>ed
            </div> */}
          </div>
          <p className={styles.footerDescription}>
            Established in 2020, <strong>The IT United</strong> has rapidly expanded,
            serving clients in 10+ countries with IT services and industry
            solutions across 40+ domains.
          </p>

          <div className={styles.footerEmail}>
            <span>✉️</span>
            <a href="mailto:info@theitunited.com">info@theitunited.com</a>
          </div>

          <div className={styles.socialLinks}>
            {socialLinks.map((link, i) => (
              <a
                href={link.href}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
              >
                <Image
                  src={link.icon}
                  alt="social"
                  width={22}
                  height={22}
                  className={styles.socialIcon}
                />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.footerCenter}>
          <div className={styles.footerColumn}>
            <h4>OFFERINGS</h4>
            <ul>
              <li>
                <Link href="/software-services-company/software-development-services">Software Development</Link>
              </li>
              <li>
                <Link href="/software-services-company/app-development-services">App Development</Link>
              </li>
              <li>
                <Link href="/software-services-company/hardware-integration-services">Hardware Integration</Link>
              </li>
              <li>
                <Link href="/software-services-company/dedicated-development-teams">Dedicated Development Teams</Link>
              </li>
              <li>
                <Link href="/software-services-company/remote-software-development-teams">Remote Teams</Link>
              </li>
              <li>
                <Link href="/software-services-company/blockchain-development-services">Blockchain Development</Link>
              </li>
            </ul>
          </div>

          <div className={styles.footerColumn}>
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/careers-at-samyotech">Career</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact-us">Contact Us</Link></li>
              <li>
                <a
                  href="https://calendly.com/i_am_amit/15min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  📅 Book a call via Calendly
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.footerRight}>
          <h4 className={styles.globalLocationHeading}>GLOBAL LOCATIONS</h4>

          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            className={styles.locationSwiper}
          >
            {locations.map((loc, i) => (
              <SwiperSlide key={i}>
                <div className={styles.locationCard}>
                  <h5 className={styles.locationCountry}>{loc.country}</h5>

                  <div className={styles.locationRow}>
                    <div className={styles.locationImage}>
                      <Image
                        src={loc.cityImg}
                        alt={loc.country}
                        width={140}
                        height={100}
                        className={styles.cityImg}
                      />
                    </div>
                    <div className={styles.locationInfo}>
                      <div className={styles.locationAddress}>{loc.address}</div>
                      <div className={styles.locationPhone}>📞 {loc.phone}</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          All Rights Reserved &copy; <span className={styles.highlight}>The IT United</span> 2020-2025
        </p>
        <div className={styles.footerLinks}>
          <Link href="/privacy-policy">Privacy Policy</Link>
          <span className={styles.divider}>|</span>
          <Link href="/terms-and-conditions">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;