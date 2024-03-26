import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";

function LayeredPinningComponent() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".panel:not(:last-child)", {
      yPercent: -100,
      ease: "none",
      stagger: 0.5,
      scrollTrigger: {
        trigger: "#container",
        start: "top top",
        end: "+=300%",
        scrub: true,
        pin: true,
      },
    });

    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });
  }, []); // Empty dependency array to run on first render

  return (
    <>
      <div id="container">
        <section className="panel one">
          <FirstSection />
        </section>
        <section className="panel two">
          <SecondSection />
        </section>
        <section className="panel three">
          <ThirdSection />
        </section>
        <section className="panel four">
          
        </section>
        <section className="panel five"></section>
        <section className="panel six"></section>
        <header></header>
      </div>
    </>
  );
}

export default LayeredPinningComponent;
