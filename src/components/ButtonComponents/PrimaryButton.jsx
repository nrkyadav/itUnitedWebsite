"use client";
import React from "react";

export default function PrimaryButton({
  text,
  showDot = false,
  onClick,
  bgColor = "#002c22",
  textGradient = "linear-gradient(135deg, #ffffff 0%, #e0e0e0 100%)",
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`button ${className}`}
      style={{
        backgroundColor: bgColor,
        backgroundImage: "none",
      }}
    >
      {showDot && <span className="dot"></span>}
      <span
        className="text"
        style={{
          background: textGradient !== "none" ? textGradient : "transparent",
          WebkitBackgroundClip: textGradient !== "none" ? "text" : "unset",
          WebkitTextFillColor: textGradient !== "none" ? "transparent" : "inherit",
          color: textGradient === "none" ? "inherit" : undefined,
        }}
      >
        {text}
      </span>
    </button>
  );
}
