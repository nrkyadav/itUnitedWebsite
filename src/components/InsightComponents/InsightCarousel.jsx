"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const InsightCarousel = () => {
  const blogs = [
    {
      id: 1,
      title: "Automating Test Suites with AI: Dos and Don'ts",
      description:
        "Automating test suites with AI enhances speed, accuracy, and scalability in software testing. This article explores the dos and don'ts, challenges, and best practices for leveraging AI-powered test automation effectively.",
      image: "🤖",
      bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "AI in Code Review: Improving Quality and Speed",
      description:
        "AI in code review is transforming software development by improving quality and speed. Learn how AI-powered tools can enhance your development workflow and catch issues before they reach production.",
      image: "💻",
      bgGradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "Emerging Tech in Mobile: AR, VR, and Beyond",
      description:
        "Emerging tech in mobile—spanning AR, VR, and beyond—is transforming industries with immersive experiences and innovative solutions that redefine user engagement.",
      image: "📱",
      bgGradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      title: "Machine Learning in DevOps: A Game Changer",
      description:
        "Discover how machine learning is revolutionizing DevOps practices, from predictive analytics to automated incident response, making software delivery faster and more reliable.",
      image: "⚙️",
      bgGradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];

  return (
    <div
      style={{
        // background: "#ffc107",
        // padding: "60px 20px",
        minHeight: "500px",
        position: "relative",
      }}
    >
      {/* Top wave decoration */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "60px",
        //   background: "white",
        //   clipPath: "polygon(0 0, 100% 0, 100% 40%, 0 100%)",
        }}
      />

      <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative" }}>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          loop={true}
          style={{
            paddingBottom: "60px",
          }}
        >
          {blogs.map((blog) => (
            <SwiperSlide key={blog.id}>
              <div
                style={{
                  background: "white",
                  borderRadius: "24px",
                  padding: "40px",
                  maxWidth: "1200px",
                  margin: "0 auto",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "40px",
                  minHeight: "400px",
                  flexWrap: "wrap",
                }}
              >
                {/* Image Section */}
                <div
                  style={{
                    flex: "0 0 400px",
                    minWidth: "300px",
                  }}
                >
                  <div
                    style={{
                      width: "100%",
                      height: "350px",
                      background: blog.bgGradient,
                      borderRadius: "16px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "120px",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
                    }}
                  >
                    {blog.image}
                  </div>
                </div>

                {/* Content Section */}
                <div
                  style={{
                    flex: 1,
                    minWidth: "300px",
                  }}
                >
                  <h2
                    style={{
                      fontSize: "36px",
                      fontWeight: "700",
                      color: "#0056b3",
                      marginBottom: "20px",
                      lineHeight: "1.3",
                    }}
                  >
                    {blog.title}
                  </h2>
                  <p
                    style={{
                      fontSize: "18px",
                      color: "#0056b3",
                      lineHeight: "1.7",
                      marginBottom: "0",
                    }}
                  >
                    {blog.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom pagination styles */}
        <style jsx global>{`
          .swiper-pagination {
            bottom: 20px !important;
          }
          
          .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: #0056b3;
            opacity: 0.3;
            transition: all 0.3s ease;
          }
          
          .swiper-pagination-bullet-active {
            opacity: 1;
            width: 32px;
            border-radius: 6px;
          }

          @media (max-width: 768px) {
            .swiper-slide > div {
              flex-direction: column;
              text-align: center;
              padding: 30px 20px !important;
            }
            
            .swiper-slide h2 {
              font-size: 28px !important;
            }
            
            .swiper-slide p {
              font-size: 16px !important;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default InsightCarousel;