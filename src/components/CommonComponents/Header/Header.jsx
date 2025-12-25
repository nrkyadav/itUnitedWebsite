"use client";

import React, { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import {
  industriesTabsOptions,
  resourcesTabsOptions,
  serviceTabsOptions,
  solutionsTabsOptions
} from "@/constants/HeaderContent/HeaderContent";
import { useRouter, usePathname } from "next/navigation";
import styles from "./Header.module.css";
import CommonModal from "../CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
  const [megaMenuOpen, setMegaMenuOpen] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    setExpanded(null);
  };

  const toggleExpand = (section) => {
    setExpanded(expanded === section ? null : section);
  };

  const toggleMegaMenu = (menu) => {
    setMegaMenuOpen(megaMenuOpen === menu ? null : menu);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setDrawerOpen(false);
        setMegaMenuOpen(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (drawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [drawerOpen]);

  const handleLinkClick = (href) => {
    setDrawerOpen(false);
    setMegaMenuOpen(null);
    setExpanded(null);

    if (!href.startsWith("#")) {
      router.push(href);
    }
  };

  const getActiveMenu = () => {
    if (pathname.startsWith("/software-services-company")) return "services";
    if (pathname.startsWith("/industries")) return "industries";
    if (pathname.startsWith("/solutions")) return "solutions";
    if (pathname.startsWith("/resources")) return "resources";
    if (pathname.startsWith("/contact-us")) return "contact";
    if (pathname === "/") return "home";
    return "";
  };

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <Link href="/" passHref style={{ textDecoration: 'none' }}>
            <Image
              src="/assets/Images/darkGreenLogo.svg"
              alt="The IT United Logo"
              width={250}
              height={60}
              priority
              className={styles.logoImg}
            />
            {/* <div style={{ fontFamily: "'Spectral', serif", fontWeight: 800, fontSize: "34px", color: "#0f423f", letterSpacing: "1px", textTransform: "uppercase", display: "flex", alignItems: "center" }}>
              The Un<span style={{ color: "#00c84f" }}>it</span>ed
            </div> */}
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${styles.desktopOnly}`}>
          <li className={`${styles.navItem} ${styles.mega} ${getActiveMenu() === "home" ? styles.active : ""}`}>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>

          <li className={`${styles.navItem} ${styles.mega} ${getActiveMenu() === "services" ? styles.active : ""}`}>
            <Link href="/software-services-company" className={styles.navLink}>
              Services <span className={styles.dropdownIcon}>▼</span>
            </Link>

            <div className={`${styles.megaDropdown} ${styles.servicesMega}`}>
              <div className={styles.megaInner}>
                <div className={styles.megaLeft}>
                  <h3 className={styles.megaTitle}>Software Development Services</h3>
                  <p className={styles.megaSubtitle}>
                    We cater to every booming solution and offer the best-in-class technology for all.
                  </p>
                  <div className={styles.megaUnderline}></div>

                  <div className={styles.tabsContainer}>
                    <div className={styles.tabsList}>
                      {serviceTabsOptions.map((tab, index) => (
                        <div
                          key={index}
                          className={`${styles.tabItem} ${activeTab === index ? styles.active : ""}`}
                          onClick={() => setActiveTab(index)}
                        >
                          {tab.title}
                        </div>
                      ))}
                    </div>

                    <div className={styles.tabContent}>
                      <div className={styles.tabLinksGrid}>
                        {serviceTabsOptions[activeTab].links.map((link, i) => (
                          <a href={link.href} key={i}>
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className={styles.megaRight}>
                  <Image
                    src="/assets/Images/services-image.webp"
                    alt="Services"
                    width={250}
                    height={250}
                    className={styles.megaImage}
                  />
                </div>
              </div>
            </div>
          </li>

          <li className={`${styles.navItem} ${styles.mega} ${getActiveMenu() === "industries" ? styles.active : ""}`}>
            <Link href="/industries" className={styles.navLink}>
              Industries <span className={styles.dropdownIcon}>▼</span>
            </Link>

            <div className={`${styles.megaDropdown} ${styles.servicesMega}`}>
              <div className={styles.megaInnerIndustries}>
                <div className={styles.megaLeft}>
                  <h3 className={styles.megaTitle}>Industries</h3>
                  <p className={styles.megaSubtitle}>
                    Steer through the ever-changing landscape with our industry expertise.
                  </p>
                  <div className={styles.megaUnderlineIndustries}></div>

                  <div className={styles.industriesGrid}>
                    {industriesTabsOptions.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <Link
                          key={index}
                          href={industry.link}
                          className={styles.industryCard}
                        >
                          <Icon className={styles.industryIcon} />
                          <span className={styles.industryTitle}>{industry.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.industryNotListed}>
                  <h3 className={styles.industryListedHeading}>Industry not listed?</h3>
                  <p className={styles.industryListedText}>
                    Ready to find the right service for your project?{" "}
                    <span className={styles.gradientTextBlue} onClick={() => setIsModalOpen(true)}>
                      Book a call via Calendly
                    </span>{" "}
                    with our solutions consultant today to discover the best fit for your needs
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className={`${styles.navItem} ${styles.mega} ${getActiveMenu() === "solutions" ? styles.active : ""}`}>
            <Link href="/solutions" className={styles.navLink}>
              Solutions <span className={styles.dropdownIcon}>▼</span>
            </Link>
            <div className={`${styles.megaDropdown} ${styles.servicesMega}`}>
              <div className={styles.megaInnerIndustries}>
                <div className={styles.megaLeft}>
                  <h3 className={styles.megaTitle}>Solutions</h3>
                  <p className={styles.megaSubtitle}>
                    We cater to every booming solutions and offer the best-in-class technology for all
                  </p>
                  <div className={styles.megaUnderlineIndustries}></div>

                  <div className={styles.industriesGrid}>
                    {solutionsTabsOptions.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <Link
                          key={index}
                          href={industry.link}
                          className={styles.industryCard}
                        >
                          <Icon className={styles.industryIcon} />
                          <span className={styles.solutionsTitle}>{industry.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.industryNotListed}>
                  <h3 className={styles.industryListedHeading}>Solutions not listed?</h3>
                  <p className={styles.industryListedText}>
                    Ready to find the right service for your project?{" "}
                    <span className={styles.gradientTextBlue} onClick={() => setIsModalOpen(true)}>
                      Book a call via Calendly
                    </span>{" "}
                    with our solutions consultant today to discover the best fit for your needs
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className={`${styles.navItem} ${styles.mega} ${getActiveMenu() === "resources" ? styles.active : ""}`}>
            <Link href="/resources" className={styles.navLink}>
              Resources <span className={styles.dropdownIcon}>▼</span>
            </Link>
            <div className={`${styles.megaDropdown} ${styles.servicesMega}`}>
              <div className={styles.megaInnerIndustries}>
                <div className={styles.megaLeft}>
                  <h3 className={styles.megaTitle}>Explore More</h3>
                  <p className={styles.megaSubtitle}>
                    We are so much more than your run-of-the-mill tech company, check out the latest
                    & exclusive trends, discoveries, and success stories.
                  </p>
                  <div className={styles.megaUnderlineIndustries}></div>

                  <div className={styles.industriesGrid}>
                    {resourcesTabsOptions.map((industry, index) => {
                      const Icon = industry.icon;
                      return (
                        <Link
                          key={index}
                          href={industry.link}
                          className={styles.industryCard}
                        >
                          <Icon className={styles.industryIcon} />
                          <span className={styles.industryTitle}>{industry.title}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <div className={styles.industryNotListed}>
                  <h3 className={styles.industryListedHeading}>
                    Hire The Top 3% of Best-in-class Developers!
                  </h3>
                  <p className={styles.industryListedText}>
                    Ready to find the right service for your project?{" "}
                    <span className={styles.gradientTextBlue} onClick={() => setIsModalOpen(true)}>
                      Book a call via Calendly
                    </span>{" "}
                    with our solutions consultant today to discover the best fit for your needs
                  </p>
                </div>
              </div>
            </div>
          </li>

          <li className={`${styles.navItem} ${getActiveMenu() === "contact" ? styles.active : ""}`}>
            <Link href="/contact-us" className={styles.navLink}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={`${styles.navActions} ${styles.desktopOnly}`}>
          <button className={styles.ctaBtn} onClick={() => setIsModalOpen(true)}>
            Schedule a call via Calendly
          </button>
        </div>

        <button className={styles.mobileMenuBtn} onClick={toggleDrawer}>
          <FaBars size={22} />
        </button>
      </nav>

      <div className={`${styles.mobileDrawer} ${drawerOpen ? styles.open : ""}`}>
        <div className={styles.drawerHeader}>
          <div className={styles.logo}>
            <Image
              src="/assets/Images/darkGreenLogo.svg"
              alt="The IT United Logo"
              width={160}
              height={40}
              priority
              className={styles.logoImg}
            />
            {/* <div style={{ fontFamily: "'Spectral', serif", fontWeight: 800, fontSize: "24px", color: "#0f423f", letterSpacing: "1px", textTransform: "uppercase", display: "flex", alignItems: "center" }}>
              The Un<span style={{ color: "#00c84f" }}>it</span>ed
            </div> */}
          </div>
          <div className={styles.closeBtn} onClick={toggleDrawer}>
            <RiCloseFill size={24} />
          </div>
        </div>

        <ul className={styles.drawerLinks}>
          <li>
            <Link href="/" onClick={() => handleLinkClick("/")}>
              Home
            </Link>
          </li>

          <li>
            <div
              className={styles.drawerCollapsible}
              onClick={() => toggleExpand("services")}
            >
              <span>Services</span>
              <FaChevronDown
                className={`${styles.chevron} ${expanded === "services" ? styles.rotate : ""}`}
              />
            </div>
            <ul className={`${styles.subLinks} ${expanded === "services" ? styles.open : ""}`}>
              {serviceTabsOptions.map((tab, index) => (
                <li key={index}>
                  <div
                    className={styles.drawerSubCollapsible}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleMegaMenu(`service-${index}`);
                    }}
                  >
                    <span>{tab.title}</span>
                    <FaChevronRight
                      className={`${styles.chevronRight} ${megaMenuOpen === `service-${index}` ? styles.rotateDown : ""
                        }`}
                    />
                  </div>
                  <ul
                    className={`${styles.nestedLinks} ${megaMenuOpen === `service-${index}` ? styles.open : ""
                      }`}
                  >
                    {tab.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.href} onClick={() => handleLinkClick(link.href)}>
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <div
              className={styles.drawerCollapsible}
              onClick={() => toggleExpand("industries")}
            >
              <span>Industries</span>
              <FaChevronDown
                className={`${styles.chevron} ${expanded === "industries" ? styles.rotate : ""}`}
              />
            </div>
            <ul className={`${styles.subLinks} ${expanded === "industries" ? styles.open : ""}`}>
              {industriesTabsOptions.map((industry, index) => {
                const Icon = industry.icon;
                return (
                  <li key={index}>
                    <Link
                      href={industry.link}
                      onClick={() => handleLinkClick(industry.link)}
                      className={styles.mobileIndustryLink}
                    >
                      <Icon className={styles.mobileIndustryIcon} />
                      <span>{industry.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li>
            <div
              className={styles.drawerCollapsible}
              onClick={() => toggleExpand("solutions")}
            >
              <span>Solutions</span>
              <FaChevronDown
                className={`${styles.chevron} ${expanded === "solutions" ? styles.rotate : ""}`}
              />
            </div>
            <ul className={`${styles.subLinks} ${expanded === "solutions" ? styles.open : ""}`}>
              {solutionsTabsOptions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <li key={index}>
                    <Link
                      href={solution.link}
                      onClick={() => handleLinkClick(solution.link)}
                      className={styles.mobileIndustryLink}
                    >
                      <Icon className={styles.mobileIndustryIcon} />
                      <span>{solution.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          {/* Resources Accordion */}
          <li>
            <div
              className={styles.drawerCollapsible}
              onClick={() => toggleExpand("resources")}
            >
              <span>Resources</span>
              <FaChevronDown
                className={`${styles.chevron} ${expanded === "resources" ? styles.rotate : ""}`}
              />
            </div>
            <ul className={`${styles.subLinks} ${expanded === "resources" ? styles.open : ""}`}>
              {resourcesTabsOptions.map((resource, index) => {
                const Icon = resource.icon;
                return (
                  <li key={index}>
                    <Link
                      href={resource.link}
                      onClick={() => handleLinkClick(resource.link)}
                      className={styles.mobileIndustryLink}
                    >
                      <Icon className={styles.mobileIndustryIcon} />
                      <span>{resource.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li>
            <Link href="/contact-us" onClick={() => handleLinkClick("/contact-us")}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={styles.drawerFooter}>
          <button className={styles.ctaBtn} onClick={() => setIsModalOpen(true)}>
            Book a Call
          </button>
        </div>
      </div>

      {drawerOpen && <div className={styles.overlay} onClick={toggleDrawer}></div>}

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </>
  );
};

export default Header;