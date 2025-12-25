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
    title: "Discover",
    desc: "We do this by identifying and ranking the key traits that provide the most return with a minimal amount of work.",
  },
  {
    step: 2,
    title: "Plan",
    desc: "We highlight the processes where smart automation and AI will unlock gains in speed, accuracy, and scalability.",
  },
  {
    step: 3,
    title: "Design",
    desc: "We build your custom AI solution in a secure test environment, integrating automation seamlessly with your existing systems.",
  },
  {
    step: 4,
    title: "Develop",
    desc: "We rigorously test every AI function and workflow to ensure accuracy, reliability, and performance. Once ready, we walk you through the working prototype in action.",
  },
  {
    step: 5,
    title: "Test",
    desc: "Once mutually approved, we embed the solution into your workflow and tools, ensuring everything functions together without disruption.",
  },
  {
    step: 6,
    title: "Launch",
    desc: "With expert-led training, step-by-step guides, and built-in monitoring tools, your team will be ready to manage and track automation from day one.",
  },
  {
    step: 7,
    title: "Support",
    desc: "We offer running support if you need any. We stay with you post launch, tracking performance, optimizing workflows, and adjusting to match your business as it grows.",
  },
];

const DevelopmentProcess = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inner}>
        <p className={styles.subheading}>Our Development Process</p>
        <h2 className={styles.heading}>
          How We Develop an MVP
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

          <SwiperSlide>
            <div className={styles.stepsRow}>
              {steps.slice(4, 7).map((step, idx) => (
                <React.Fragment key={step.step}>
                  <div className={styles.stepBlock}>
                    <div className={styles.circle}>{step.step}</div>
                    <div className={styles.textBox}>
                      <p className={styles.stepTag}>Step {step.step}</p>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </div>
                  {idx < 2 && (
                    <div className={styles.connector}>
                      {idx === 1 && (
                        <div className={styles.rocketWrapper}>
                          <img
                            src="/assets/Images/rocket.webp"
                            className={styles.rocket}
                            alt="rocket"
                          />
                        </div>
                      )}
                    </div>
                  )}
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