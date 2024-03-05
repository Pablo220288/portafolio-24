import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function About() {
  const [lettersRef, setlettersRef] = useArrayRef();
  const triggerRef = useRef(null);

  function useArrayRef() {
    const lettersRef = useRef([]);
    lettersRef.current = [];
    return [lettersRef, (ref) => ref && lettersRef.current.push(ref)];
  }

  gsap.registerPlugin(ScrollTrigger);
  const text =
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut.";

  useEffect(() => {
    const anim = gsap.to(lettersRef.current, {
      scrollTrigger: {
        trigger: triggerRef.current,
        scrub: true,
        start: "top center",
        end: "bottom 85%",
      },
      color: "#ffffff",
      duration: 5,
      stagger: 1,
    });
    return () => {
      anim;
    };
  }, [lettersRef]);

  return (
    <>
      <div className="reveal">
        <div ref={triggerRef}>
          {text.split("").map((letter, index) => (
            <span className="reveal-text" key={index} ref={setlettersRef}>
              {letter}
            </span>
          ))}
        </div>
      </div>
      <div className="spacing"></div>
    </>
  );
}
