"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import styles from "./ServicesInternalPageBanner.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const ServicesInternalPageBanner = ({ title, description, stats, image, isFromInternalServicePage=false }) => {
    const logos = [
        "/assets/Images/artbeatz.webp",
        "/assets/Images/bartanwala.webp",
        "/assets/Images/blueturtle.webp",
        "/assets/Images/byloapp.webp",
        "/assets/Images/fannan.webp",
        "/assets/Images/felix.webp",
        "/assets/Images/inciem.webp",
        "/assets/Images/mgo.webp",
        "/assets/Images/techteam.webp",
        "/assets/Images/ustaska.webp",

    ];


    return (
        <section  className={`${styles.bannerSection} ${
            isFromInternalServicePage ? styles.internalBanner : ""
        }`}>
            <div className={styles.container}>

                <div className={styles.leftContainer}>
                    <div className={styles.breadcrumb}>
                        <Link href="/">Home</Link>
                        <ChevronRight size={16} />
                        <Link href="/software-services-company">Services</Link>
                        <ChevronRight size={16} />
                        <span>{title}</span>
                    </div>

                    <div className={styles.leftContent}>
                        <h2 className={styles.heading}>{title}</h2>

                        <p className={styles.description}>
                            {description}
                        </p>

                        <div className={styles.statsRow}>
                            {stats.map((item, index) => (
                                <div key={index} className={styles.statBox}>
                                    <p>{item.label}</p>
                                    <h3>{item.value}</h3>
                                </div>
                            ))}
                        </div>

                        <div className={styles.trusted}>
                            <p>Some happy clients</p>
                            <div className={styles.carouselWrapper}>
                                <Swiper
                                    modules={[Autoplay]}
                                    slidesPerView={5}
                                    spaceBetween={30}
                                    autoplay={{ delay: 0, disableOnInteraction: false }}
                                    speed={2000}
                                    loop={true}
                                    freeMode={true}
                                    className={styles.clientsSwiper}
                                >
                                    {logos.map((client, i) => (
                                        <SwiperSlide key={i} className={styles.clientSlide}>
                                            <Image
                                                src={client}
                                                alt={`Client ${i + 1}`}
                                                width={150}
                                                height={70}
                                                className={styles.clientLogo}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.rightImage}>
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className={styles.bannerImage}
                    />
                </div>
            </div>
        </section>
    );
};

export default ServicesInternalPageBanner;
