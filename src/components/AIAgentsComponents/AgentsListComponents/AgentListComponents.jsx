"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./AgentListComponent.module.css";
import {
  User,
  Clock,
  ArrowUpRight,
  Shield,
  BarChart3,
  Pen,
  MessageCircle,
  FileSearch,
  Database,
  ServerCog,
  ShoppingCart,
  GraduationCap,
  Mail,
  Sparkles,
  Target,
  Briefcase,
  ExternalLink,
} from "lucide-react";
import CommonModal from "@/components/CommonComponents/CommonModal";
import ModalForm from "@/components/Forms/ModalForm/ModalForm";
import { AGENTS } from "@/constants/AIAgentsContent/AIAgentsContent";

const CATEGORY_ICONS = {
  "Business Intelligence": BarChart3,
  "Content Creation": Pen,
  "Customer Support": MessageCircle,
  "Data Extraction": FileSearch,
  "Data Management": Database,
  "Dev Ops": ServerCog,
  DevOps: ServerCog,
  Ecommerce: ShoppingCart,
  Education: GraduationCap,
  Email: Mail,
  "Lead Generation": Target,
  Scrapper: FileSearch,
};

const PLATFORMS = ["All", "Make", "RelevanceAI", "Voiceflow", "n8n"];

const ITEMS_PER_PAGE = 70;

export default function AgentListComponent() {
  const [search, setSearch] = useState("");
  const [platform, setPlatform] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [forceUpdate, setForceUpdate] = useState(false);
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const CATEGORIES = useMemo(() => {
    const categorySet = new Set();
    AGENTS.forEach((agent) => {
      agent.categories.forEach((category) => {
        categorySet.add(category);
      });
    });
    return Array.from(categorySet)
      .sort()
      .map((cat) => ({ key: cat }));
  }, []);

  const categoryCounts = useMemo(() => {
    const counts = {};
    CATEGORIES.forEach((cat) => {
      counts[cat.key] = AGENTS.filter((agent) =>
        agent.categories.includes(cat.key)
      ).length;
    });
    return counts;
  }, [CATEGORIES]);

  const filteredAgents = useMemo(() => {
    return AGENTS.filter((a) => {
      const matchSearch =
        search.trim() === "" ||
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.description.toLowerCase().includes(search.toLowerCase());
      const matchPlatform =
        platform === "All" || a.platforms.includes(platform);
      const matchCategory =
        !selectedCategory || a.categories.includes(selectedCategory);
      return matchSearch && matchPlatform && matchCategory;
    });
  }, [search, platform, selectedCategory]);

  const showPagination = filteredAgents.length > ITEMS_PER_PAGE;

  const displayAgents = showPagination
    ? filteredAgents.slice(
      (currentPage - 1) * ITEMS_PER_PAGE,
      currentPage * ITEMS_PER_PAGE
    )
    : filteredAgents;

  const totalPages = Math.ceil(filteredAgents.length / ITEMS_PER_PAGE);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.matchMedia("(hover: none)").matches);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: none)");
      const handleChange = (e) => setIsMobile(e.matches);
      handleChange(mediaQuery);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, []);

  useEffect(() => {
    AGENTS.forEach((agent) => {
      agent.showVideo = false;
      agent.showOverlay = false;
    });
  }, [activeVideoId]);

  const handleCardClick = (agent, e) => {
    const target = e.target;
    const isInteractiveElement =
      target.closest("iframe") ||
      target.closest("button") ||
      target.closest("a") ||
      target.closest("[data-video-control]");

    if (!isInteractiveElement) {
      window.location.href = agent.link;
    }
  };

  return (
    <section className={styles.smartSection}>
      <div className={styles.overlay}>
        <div className={styles.smartWrapper}>
          <aside className={styles.sidebar}>
            <div className={styles.searchContainer}>
              <input
                type="text"
                placeholder="Search automations..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className={styles.searchInput}
              />
              <button
                className={styles.searchButton}
                onClick={() => { }}
                aria-label="Search"
              >
                Search
              </button>
            </div>

            <div className={styles.sidebarSection}>
              <div className={styles.sectionLabel}>
                <Shield className={styles.sectionIcon} />
                Platform
              </div>
              <select
                className={styles.dropdown}
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div className={styles.sidebarSection}>
              <div className={styles.sectionLabel}>
                <ServerCog className={styles.sectionIcon} />
                Categories
              </div>

              <div className={styles.categoriesList}>
                {CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.key] || Briefcase;
                  const selected = selectedCategory === cat.key;
                  const count = categoryCounts[cat.key] || 0;
                  return (
                    <div
                      key={cat.key}
                      className={`${styles.categoryItem} ${selected ? styles.categorySelected : ""
                        }`}
                      onClick={() =>
                        setSelectedCategory(selected ? null : cat.key)
                      }
                    >
                      <div className={styles.categoryLeft}>
                        <Icon className={styles.categoryIcon} />
                        <span className={styles.categoryTitle}>{cat.key}</span>
                      </div>
                      <div className={styles.categoryCount}>{count}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </aside>

          <div className={styles.tabletFilters}>
            <div className={styles.tabletTopRow}>
              <div className={styles.searchContainer}>
                <input
                  type="text"
                  placeholder="Search automations..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={styles.searchInput}
                />
                <button
                  className={styles.searchButton}
                  onClick={() => { }}
                  aria-label="Search"
                >
                  Search
                </button>
              </div>

              <select
                className={styles.dropdown}
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                {PLATFORMS.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <div className={styles.tabletCategoriesLabel}>Categories</div>
              {/* Tablet view - wrapped categories */}
              <div className={styles.tabletCategories}>
                {CATEGORIES.map((cat) => {
                  const Icon = CATEGORY_ICONS[cat.key] || Briefcase;
                  const selected = selectedCategory === cat.key;
                  const count = categoryCounts[cat.key] || 0;
                  return (
                    <div
                      key={cat.key}
                      className={`${styles.categoryBadge} ${selected ? styles.categoryBadgeSelected : ""
                        }`}
                      onClick={() =>
                        setSelectedCategory(selected ? null : cat.key)
                      }
                    >
                      <Icon className={styles.categoryBadgeIcon} />
                      <span>{cat.key}</span>
                      <span className={styles.categoryBadgeCount}>
                        ({count})
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className={styles.rightSection}>
            <div className={styles.resultsHeader}>
              <div className={styles.resultsTitle}>
                All AI Agents ({filteredAgents.length} results)
              </div>

              <div>
                <button
                  className={styles.requestButton}
                  onClick={() => setIsModalOpen(true)}
                >
                  Request Custom Automation
                </button>
              </div>
            </div>

            <div className={styles.resultsWrapper}>
              {displayAgents.length === 0 ? (
                <div className={styles.noResults}>
                  <Sparkles className={styles.noResultsIcon} />
                  <h3>No Results Found</h3>
                  <p>Try adjusting your search or filter criteria</p>
                </div>
              ) : (
                <div className={styles.cardContainer}>
                  {displayAgents.map((t) => (
                    <article
                      key={t.id}
                      className={styles.card}
                      onClick={(e) => handleCardClick(t, e)}
                    >
                      <div
                        className={styles.cardImageWrapper}
                        onClick={() => {
                          if (window.matchMedia("(hover: none)").matches) {
                            if (activeVideoId !== t.id && !t.showOverlay) {
                              t.showOverlay = true;
                              setForceUpdate(!forceUpdate);
                            }
                          }
                        }}
                      >
                        {activeVideoId !== t.id ? (
                          <>
                            <Image
                              src={t.agentCardImage}
                              alt={t.title}
                              fill
                              className={styles.cardImage}
                            />

                            {(t.showOverlay || !isMobile) && (
                              <div
                                className={styles.playOverlay}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  t.showVideo = true;
                                  setActiveVideoId(t.id);
                                  setForceUpdate(!forceUpdate);
                                }}
                              >
                                <div className={styles.playIconCircle}>
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={styles.playIcon}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  >
                                    <polygon points="5 3 19 12 5 21 5 3" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </>
                        ) : (
                          <div className={styles.videoWrapper}>
                            <iframe
                              src={`${t.videoUrl || t.video}?autoplay=1`}
                              title={t.title}
                              frameBorder="0"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            ></iframe>

                            <button
                              className={styles.closeVideoBtn}
                              onClick={(e) => {
                                e.stopPropagation();
                                setActiveVideoId(null);
                              }}
                            >
                              ✕
                            </button>
                          </div>
                        )}
                      </div>

                      <div className={styles.cardContent}>
                        <div className={styles.aiIndicator}>
                          <Sparkles className={styles.aiIcon} />
                          <span>AI</span>
                        </div>
                        <div className={styles.cardTop}>
                          <div className={styles.cardTabs}>
                            {t.platforms.slice(0, 2).map((p, i) => (
                              <span key={i} className={styles.platformBadge}>
                                {p}
                              </span>
                            ))}
                          </div>

                          <h3 className={styles.cardTitle}>{t.title}</h3>

                          <p className={styles.cardDescription}>
                            {t.description}
                          </p>
                        </div>

                        <div className={styles.cardFooter}>
                          <div className={styles.footerLeft}>
                            <span className={styles.footerItem}>
                              <User className={styles.footerIcon} /> {t.author}
                            </span>
                            <span className={styles.footerItem}>
                              <Clock className={styles.footerIcon} />{" "}
                              {t.duration}
                            </span>
                          </div>


                        </div>
                        <div className={styles.footerRight} style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                          <Link href={t.link} className={styles.viewDetails}>
                            View Details{" "}
                            <ArrowUpRight className={styles.linkIcon} />
                          </Link>

                          <Link
                            href={t.youtubeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.viewDetails}
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Demo{" "}
                            <ExternalLink className={styles.linkIcon} />
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              )}

              {showPagination && (
                <div className={styles.pagination}>
                  <button
                    className={styles.paginationButton}
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                  >
                    Previous
                  </button>
                  <span className={styles.paginationInfo}>
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    className={styles.paginationButton}
                    onClick={() =>
                      setCurrentPage((p) => Math.min(totalPages, p + 1))
                    }
                    disabled={currentPage === totalPages}
                  >
                    Next
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <CommonModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Request Custom Automation"
        description="Tell us about your automation needs, and we'll build a custom solution."
      >
        <ModalForm formType="automation" />
      </CommonModal>
    </section>
  );
}
