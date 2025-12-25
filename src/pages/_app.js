import "@/styles/globals.css";
import "antd/dist/reset.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-toastify/dist/ReactToastify.css";
import "react-phone-input-2/lib/style.css";
import "swiper/css";
import "swiper/css/pagination";
import { ConfigProvider } from "antd";
import Head from "next/head";
import AOSProvider from "@/helpers/AOSProvider/AOSProvider";
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function App({ Component, pageProps }) {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Samyotech",
    url: "https://samyotech.com",
    logo: "https://samyotech.com/logo.png",
    description:
      "Leading software development company offering web, mobile, and AI-driven solutions globally.",
    sameAs: [
      "https://www.facebook.com/samyotech/",
      "https://www.linkedin.com/company/samyotech-technologies/",
      "https://twitter.com/samyotech",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91XXXXXXXXXX",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressRegion: "Madhya Pradesh",
      addressLocality: "Indore",
    },
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      smooth: true,
      lerp: 0.08,
    });

    window.__lenis = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const stopDuringOverlay = (e) => {
      const countryList = document.querySelector(
        ".react-tel-input .country-list"
      );
      if (countryList && countryList.contains(e.target)) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("mousemove", stopDuringOverlay, true);
    document.addEventListener("touchstart", stopDuringOverlay, true);

    return () => {
      document.removeEventListener("mousemove", stopDuringOverlay, true);
      document.removeEventListener("touchstart", stopDuringOverlay, true);
      lenis.destroy();
      window.__lenis = null;
    };
  }, []);

  return (
    <ConfigProvider>
      <AOSProvider>
        <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </Head>
        <ToastContainer />
        <Component {...pageProps} />
      </AOSProvider>
    </ConfigProvider>
  );
}
