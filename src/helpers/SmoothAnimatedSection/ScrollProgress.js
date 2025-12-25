import { useEffect, useState } from "react";
import Lenis from "@studio-freight/lenis";

export default function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
      const scrollPercent = (lenis.scroll / (lenis.limit || document.body.scrollHeight - window.innerHeight)) * 100;
      setScroll(scrollPercent);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "4px", zIndex: 9999 }}>
      <div
        style={{
          width: `${scroll}%`,
          height: "100%",
          backgroundColor: "#E05720",
          transition: "width 0.1s",
        }}
      />
    </div>
  );
}
