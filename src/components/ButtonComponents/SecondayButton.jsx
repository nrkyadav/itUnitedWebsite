import Link from "next/link";
import React from "react";

const SecondaryButton = ({
  text,
  bgColor = "#101010",
  onClick,
  showBorder = false,
  showLinks = false,
  borderColor = "#000000",
  dotColor = "#ffffff",
  isOrange = false,
  showDot = true,
  className = "",
  iconClassName = "",
  link, 
}) => {
  const buttonContent = (
    <>
      {showDot && (
        <span className="dot" style={{ backgroundColor: dotColor }}></span>
      )}
      {text}
      
    </>
  );

  return link ? (
    <Link href={link} passHref>
      <button
        className={`secondary-button cursor-pointer ${
          showBorder ? "with-border" : ""
        } ${className}`}
        style={{
          backgroundColor: bgColor,
          borderColor: showBorder ? borderColor : "transparent",
          color: showBorder ? "#333333" : "#fff",
        }}
      >
        {buttonContent}
      </button>
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`secondary-button cursor-pointer ${
        showBorder ? "with-border" : ""
      } ${className}`}
      style={{
        backgroundColor: bgColor,
        borderColor: showBorder ? borderColor : "transparent",
        color: showBorder ? "#333333" : "#fff",
      }}
    >
      {buttonContent}
    </button>
  );
};

export default SecondaryButton;
