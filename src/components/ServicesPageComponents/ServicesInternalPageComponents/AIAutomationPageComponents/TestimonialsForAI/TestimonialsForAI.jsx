"use client";
import React, { useRef } from "react";
import styles from "./TestimonialsForAI.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const testimonials = [
    {
        image: "/assets/Images/davidM.webp",
        name: "David M.",
        rating: 5,
        location: "New York, USA",
        text: "I’ve tried several similar services before, but none compare to Samyotech. The attention to detail and customer care is unmatched. I will definitely be returning for future needs!",
    },
    {
        image: "/assets/Images/emmaR.webp",
        name: "Emma R.",
        rating: 4,
        location: "London, UK",
        text: "Exceptional quality at a reasonable price! Samyotech delivers exactly what they promise. The product was even better than I expected, and the support team was super helpful.",
    },
    {
        image: "/assets/Images/markt.webp",
        name: "Mark T.",
        rating: 5,
        location: "Sydney, Australia",
        text: "I needed a solution quickly, and Samyotech delivered on time with zero hassle. Their professionalism and expertise made the whole process stress-free. Will definitely use their services again!",
    },
    {
        image: "/assets/Images/sarahl.webp",
        name: "Sarah L.",
        rating: 4,
        location: "Toronto, Canada",
        text: "I am beyond impressed with the quality and professionalism of Samyotech. From start to finish, the experience was seamless. The team was responsive, the service was top-notch, and the results exceeded my expectations. Highly recommended!",
    },
];


const TestimonialsForAI = () => {
    const paginationRef = useRef(null);

    return (
        <section className={styles.smartSection}>
            <div className={styles.overlay}>

                <h2 className={styles.largeHeading}>
                    Testimonials
                </h2>


                    <div className={styles.swiperWrapper}>
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={20}
                            slidesPerView={3}
                            pagination={{
                                clickable: true,
                                el: paginationRef.current,
                            }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            loop={true}
                            onInit={(swiper) => {
                                swiper.params.pagination.el = paginationRef.current;
                                swiper.pagination.init();
                                swiper.pagination.render();
                                swiper.pagination.update();
                            }}
                            breakpoints={{
                                0: { slidesPerView: 1 },
                                768: { slidesPerView: 2 },
                                1200: { slidesPerView: 3 },
                            }}
                            className={styles.swiperContainer}
                        >
                            {testimonials.map((t, i) => (
                                <SwiperSlide key={i}>
                                    <div className={styles.card}>
                                        <div className={styles.cardHeader}>
                                            <div className={styles.imageWrapper}>
                                                <Image
                                                    src={t.image}
                                                    alt={t.name}
                                                    fill
                                                    className={styles.userImage}
                                                />
                                            </div>
                                            <div>
                                                <h4 className={styles.userName}>{t.name}</h4>
                                                <div className={styles.rating}>
                                                    {Array.from({ length: 5 }).map((_, index) => (
                                                        <span
                                                            key={index}
                                                            className={
                                                                index < t.rating
                                                                    ? styles.starFilled
                                                                    : styles.starEmpty
                                                            }
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                                <p className={styles.location}>{t.location}</p>
                                            </div>
                                        </div>
                                        <p className={styles.description}>{t.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div ref={paginationRef} className={styles.customPagination}></div>
                    </div>





            </div>
        </section>
    );
};

export default TestimonialsForAI;
