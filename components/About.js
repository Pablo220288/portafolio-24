import React, { useEffect, useRef } from "react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const [lettersRef, setLettersRef] = useArrayRef();
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  const comp = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  /* 
  useIsomorphicLayoutEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.revert();
    };
  }, []); */

  useIsomorphicLayoutEffect(() => {
    let tl = gsap.timeline({
      defaults: {
        ease: "none",
      },
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 2,
        end: () => "+=" + sectionRef.current.offsetWidth / 2,
      },
    });
    tl.to(sectionRef.current, {
      translateX: "-200vw",
    });
    tl.fromTo(
      "#letter-about-0",
      { opacity: 0, yPercent: -50 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "elastic.out(2,1)",
        scrollTrigger: {
          trigger: "#letter-about-0",
          start: "left 70%",
          end: "center 40%",
          containerAnimation: tl,
          scrub: true,
        },
      }
    );
    tl.fromTo(
      "#letter-about-1",
      { opacity: 0, yPercent: 50 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "elastic.out(1,1)",
        scrollTrigger: {
          trigger: "#letter-about-1",
          start: "left 70%",
          end: "center 40%",
          containerAnimation: tl,
          scrub: true,
        },
      }
    );
    tl.fromTo(
      "#letter-about-2",
      { opacity: 0, yPercent: -50 },
      {
        opacity: 1,
        yPercent: 0,
        ease: "elastic.out(1,1)",
        scrollTrigger: {
          trigger: "#letter-about-2",
          start: "left 70%",
          end: "center 40%",
          containerAnimation: tl,
          scrub: true,
        },
      }
    );
    tl.fromTo(
      "#letter-about-4",
      { opacity: 0, yPercent: 50 },
      {
        opacity: 1,
        yPercent: 0,
        duration: 0.8,
        ease: "elastic.out(1,1)",
        scrollTrigger: {
          trigger: "#letter-about-4",
          start: "left 70%",
          end: "center 40%",
          containerAnimation: tl,
          scrub: true,
        },
      }
    );

    return () => {
      tl.revert();
    };
  }, []);

  const textAbout = "Web Developer";

  return (
    <section className="about-section-content">
      <div ref={triggerRef}>
        <div className="about-section-inner" ref={sectionRef}>
          <div className="about-section about-hader">
            {textAbout.split("").map((letter, index) => (
              <span className="letter-split" key={index} id={`letter-about-${index}`}>
                {letter === " " ? "\xA0" : letter}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
