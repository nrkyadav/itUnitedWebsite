// import { useEffect, useRef } from "react";

// const animations = [
//   "fade-up",
//   "fade-down",
//   "fade-left",
//   "fade-right",
//   "zoom-in",
//   "zoom-in-up",
//   "zoom-in-down",
//   "zoom-in-left",
//   "zoom-in-right",
//   "zoom-out",
// ];

// export default function AnimatedOnScroll({ children, duration = 1200 }) {
//   const el = useRef();

//   useEffect(() => {
//     const randomAnim = animations[Math.floor(Math.random() * animations.length)];
    
//     if (el.current) {
//       el.current.setAttribute("data-aos", randomAnim);
//       el.current.setAttribute("data-aos-duration", duration);
//       el.current.setAttribute("data-aos-once", "true");
//       el.current.setAttribute("data-aos-easing", "ease-out-cubic");
//       el.current.setAttribute("data-aos-offset", "100");
//     }
//   }, [duration]);

//   return <div ref={el}>{children}</div>;
// }

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AnimatedOnScroll({ children, duration = 0.6 }) {
  const el = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el.current,
            start: "top 90%",   
            end: "bottom 70%",  
            toggleActions: "play none none none", 
            once: true,      
          },
        }
      );
    });

    return () => ctx.revert();
  }, [duration]);

  return <div ref={el}>{children}</div>;
}



