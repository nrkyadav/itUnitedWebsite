import React from "react";

const InsideHeader = ({ Title }) => {
  return (
    <section
      style={{
        padding: "80px 20px",
        background: "#1a2332",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          // zIndex: 1,
        }}
      >
        <h2
          style={{
            fontSize: "48px",
            fontWeight: "700",
            marginBottom: "16px",
          }}
        >
          {Title}
        </h2>
        <p
          style={{
            fontSize: "16px",
            opacity: 0.9,
            //   lineHeight: "1.6",
            maxWidth: "800px",
          }}
        >
          Delight users, deliver value, and accelerate your innovation with
          software development services that outperform functionalities and
          capabilities.
        </p>
      </div>
    </section>
  );
};

export default InsideHeader;
