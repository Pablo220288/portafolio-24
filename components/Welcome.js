import React, { useRef } from "react";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";
import gsap from "gsap";

export default function Welcome() {
  const comp = useRef(null);

  useIsomorphicLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#letter-1", {
        opacity: 0,
        x: 260,
        duration: 0.4,
        delay: 2,
      });
      t1.from(
        "#letter-2",
        {
          duration: 0.3,
          scale: 0,
        },
        ">"
      );
      t1.from(["#letter-5", "#letter-7"], {
        opacity: 0,
        rotateY: 180,
        duration: 0.2,
      });
      t1.from("#letter-3", {
        opacity: 0,
        y: -100,
        duration: 0.2,
      });
      t1.from(["#letter-4"], {
        opacity: 0,
        y: 100,
        duration: 0.2,
      });
      t1.to(["#letter-5"], {
        transformOrigin: "74px center",
        rotateZ: 360,
        duration: 0.8,
      });
      t1.to(
        ["#letter-7"],
        {
          transformOrigin: "-33px center",
          rotateZ: 360,
          duration: 0.8,
        },
        3.5
      );
      t1.to(
        ["#letter-3"],
        {
          x: -19,
          duration: 0.3,
        },
        3.5
      );
      t1.to(
        ["#letter-2"],
        {
          x: 38,
          duration: 0.3,
        },
        3.5
      );
      t1.from(
        ["#letter-6"],
        {
          opacity: 0,
          rotateZ: 360,
          transformOrigin: "right top",
          duration: 0.6,
        },
        2.8
      );
      t1.from(["#letter-8"], {
        opacity: 0,
        duration: 0.4,
      });
      t1.from(["#letter-9"], {
        opacity: 0,
        duration: 0.2,
      });
      t1.to(
        [
          "#letter-1",
          "#letter-3",
          "#letter-2",
          "#letter-4",
          "#letter-5",
          "#letter-6",
          "#letter-7",
          "#letter-8",
          "#letter-9",
        ],
        {
          y: -200,
          opacity: 0,
          duration: 0.4,
          stagger: {
            amount: 0.3,
          },
        },
        ">+1"
      );
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div className="welcome-content" ref={comp}>
      <span className="welcome-letter" id="letter-1">
        W
      </span>
      <span className="welcome-letter" id="letter-2">
        l
      </span>
      <span className="welcome-letter" id="letter-3">
        e
      </span>
      <span className="welcome-letter" id="letter-4">
        c
      </span>
      <span className="welcome-letter" id="letter-5">
        o
      </span>
      <span className="welcome-letter" id="letter-6">
        m
      </span>
      <span className="welcome-letter" id="letter-7">
        e
      </span>
      <span className="welcome-letter" id="letter-8">
        .
      </span>
      <span className="welcome-letter" id="letter-9">
        .
      </span>
    </div>
  );
}
