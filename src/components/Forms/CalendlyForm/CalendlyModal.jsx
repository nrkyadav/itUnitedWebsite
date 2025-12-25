import React from "react";
import { InlineWidget } from "react-calendly";

const CalendlyModal = () => {
  return (
    <div style={{ height: "600px" }}>
      <InlineWidget
        url="https://calendly.com/theitunited/30min"
        styles={{
          height: "100%",
          width: "100%",
          minWidth: "320px",
        }}
      />
    </div>
  );
};

export default CalendlyModal;
