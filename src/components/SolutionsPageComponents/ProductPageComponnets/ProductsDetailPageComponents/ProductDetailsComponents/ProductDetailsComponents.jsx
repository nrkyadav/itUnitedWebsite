"use client";

import React, { useRef, useEffect, useState } from "react";
import styles from "./ProductDetailsComponents.module.css";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShoppingCart } from "lucide-react";
import { FaWhatsapp, FaYoutube } from "react-icons/fa";
import { productsData } from "@/constants/SolutionPageContent/ProductPageContent";
import CommonModal from "@/components/CommonComponents/CommonModal";
import CalendlyModal from "@/components/Forms/CalendlyForm/CalendlyModal";

const ProductDetailsComponents = ({ productId }) => {
  const leftScrollRef = useRef(null);
  const product = productsData.find((item) => item.id === productId);
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!product) return <p>Product not found!</p>;

  const similarProducts = productsData.filter((item) => item.id !== productId);

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




  return (
    <div className={styles.mainWrapper}>
      <div className={styles.headingWrapper}>
        <h1 className={styles.heading}>{product.title}</h1>
        <div className={styles.headingUnderline}></div>
      </div>

      <div className={styles.secondWrapper}>
        <div className={styles.leftScrollBox} ref={leftScrollRef}>
          <div className={styles.imageWrapper}>
            <Image
              src={product.image}
              alt={product.title}
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
                  {product.title} with AI
                </p>

              </div>
            </div>
          </div>

          <div className={styles.connectCard}>
            <Image
              src="/assets/Images/youtube-bg.png"
              alt="YouTube Background"
              width={1200}
              height={400}
              className={styles.connectBgImage}
            />
            <div className={styles.connectOverlay}>
              <div className={styles.connectContentYoutube}>
                <p className={styles.connectSubtitleYoutube}>{product.title}</p>

                <a
                  href={product.youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.connectBtn} ${styles.youtubeBtn}`}
                >
                  <FaYoutube size={20} />
                  Connect Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightSidebar}>
          <div>
            <h3 className={styles.sectionTitle}>Key Features</h3>
            <ul className={styles.verticalList}>
              {product.keyFeatures?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className={styles.customAgentBox}>
            <h3 className={styles.whiteHeading}>Need a Custom Product?</h3>
            <p className={styles.whiteSubText}>
              From idea to execution — we build custom products & software solutions for your business.
            </p>


          </div>

          <div className={styles.infoBox}>
            <ul className={styles.infoList}>
              {product.stats.map((stat, index) => (
                <li key={index}>
                  <strong>{stat.label}:</strong>
                  <span>{stat.value}</span>
                </li>
              ))}
            </ul>

            <button
              className={styles.downloadBtn}
              onClick={() => setIsModalOpen(true)}
            >
              <ShoppingCart size={18} />
              Buy Now
            </button>

          </div>

          <div className={styles.similarBox}>
            <h3 className={styles.similarHeading}>Similar Products</h3>

            <div className={styles.similarList}>
              {similarProducts.map((item) => (
                <Link
                  href={item.link || "/solutions/products"}
                  key={item.id}
                  className={styles.similarItem}
                >
                  <span>{item.title}</span>
                  <ArrowRight size={18} />
                </Link>
              ))}

            </div>
          </div>
        </div>
      </div>

      <CommonModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <CalendlyModal />
      </CommonModal>
    </div>
  );
};

export default ProductDetailsComponents;