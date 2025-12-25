
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      delay: 0,
      anchorPlacement: "top-bottom",
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
}