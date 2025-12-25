"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./DevelopmentProcess.module.css";

const steps = [
  {
    step: 1,
    title: "Discovery call",
    desc: "Share your project requirements with us. We’ll review your staffing needs, the skills you’re looking for, and your expected timeline.",
  },
  {
    step: 2,
    title: "Screnning",
    desc: "Then, our staff closely screens candidates against your requirements, providing a perfect skill and culture fit.",
  },
  {
    step: 3,
    title: "Interview",
    desc: "We present 2-3 well selected individuals for your examination, allowing you to assess their abilities and then you can make a more informed choice.",
  },
  {
    step: 4,
    title: "OnBoarding",
    desc: "We help with background checks, onboarding, and training  and make sure to successfully integrate the selected applicants into your company.",
  },
  {
    step: 5,
    title: "Support",
    desc: "We deliver continuous support by overseeing augmented developers, addressing ongoing issues, and performing routine performance analysis to maintain a seamless and efficient collaboration.",
  },
];

const DevelopmentProcess = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.subheading}>From Start to Success</p>
        <h2 className={styles.heading}>
          Get Success with Our Staff Augmentation Process
        </h2>

        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          pagination={{ clickable: true }}
          className={styles.swiper}
        >
          <SwiperSlide>
            <div className={styles.stepsRow}>
              {steps.slice(0, 3).map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className={styles.stepBlock}>
                    <div className={styles.circle}>{step.step}</div>
                    <div className={styles.textBox}>
                      <p className={styles.stepTag}>Step {step.step}</p>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                  {idx < 2 && <div className={styles.connector}></div>}
                </React.Fragment>
              ))}
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.stepsRow}>
              {steps.slice(2, 5).map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className={styles.stepBlock}>
                    <div className={styles.circle}>{step.step}</div>
                    <div className={styles.textBox}>
                      <p className={styles.stepTag}>Step {step.step}</p>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                  {idx < 2 && <div className={styles.connector}></div>}
                </React.Fragment>
              ))}
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </div>
  );
};

export default DevelopmentProcess;