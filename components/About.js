/* import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

export default function About() {
  const title = "About";
  const content = "Soy desarrollador web freelance";
  useEffect(() => {
    setTimeout(() => {
      AOS.init({
        once: false,
      });
    }, 0);
  }, []);

  return (
    <div className="content-section">
      <section className="title-section">
        <h2>
          {title.split("").map((letter, index) => (
            <span
              className="letter-split"
              key={index}
              data-aos="fade-down"
              data-aos-delay={index * 100}
              data-aos-easing="ease-in-out"
            >
              {letter}
            </span>
          ))}
        </h2>
      </section>
      <section className="section-content">
        <h2>
          {content.split("").map((letter, index) => (
            <span className="letter-split" key={index} data-aos="fade-in"
            data-aos-delay={index * 50}>
              {letter}
            </span>
          ))}
        </h2>
      </section>
    </div>
  );
} */

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const letterRef = useRef(null);

  const title = "About";

  gsap.registerPlugin(ScrollTrigger);

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline();
    tl.from("span", {
      y: -500,
      opacity: 0,
      scrollTrigger: {
        pin: true,
        scrub: 1,
        trigger: sectionRef.current,
      },
      stagger: {
        amount: 2,
      },
    });
    return () => {
      tl;
    };
  }, []);

  return (
    <div className="content-section">
      <section className="title-section">
        <h2 ref={letterRef}>
          {title.split("").map((letter, index) => (
            <span className="letter-split" key={index}>
              {letter}
            </span>
          ))}
        </h2>
      </section>
    </div>
  );
}
