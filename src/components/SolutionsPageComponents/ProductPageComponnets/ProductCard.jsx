"use client";

import React from "react";
import styles from "./ProductCard.module.css";
import Image from "next/image";


const ProductCard = () => {
    const products = [
        {
            image: "/assets/Images/petstore.svg",
            title: "Petstore | E-commerce Platform for Pets",
            description:
                "Food, toys, grooming, and health—everything your pets need, delivered with care.",
            link: "#",
        },
        {
            image: "/assets/Images/hostel.svg",
            title: "Hostel ERP | Hostel Management System",
            description:
                "A digital system for managing hostel rooms, students, fees, attendance, visitors, and maintenance.",
            link: "#",
        },
        {
            image: "/assets/Images/library.svg",
            title: "Smart Library | Library Management System",
            description:
                "A digital system that streamlines book management, member records, borrowing, and returns.",
            link: "#",
        },
    ];
    return (
        <section className={styles.bannerSection}>
            <div className={styles.container}>
            <div className={styles.cardGrid}>
                {products.map((product, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                className={styles.cardImage}
                            />
                        </div>

                        <div className={styles.cardContent}>
                            <h3 className={styles.cardTitle}>{product.title}</h3>
                            <p className={styles.cardDesc}>{product.description}</p>
                            {/* <a href={product.link} className={styles.viewLink}>
                  View Product <ArrowUpRight size={18} />
                </a> */}
                        </div>
                    </div>
                ))}
            </div>
            </div>

        </section>
    );
};

export default ProductCard;