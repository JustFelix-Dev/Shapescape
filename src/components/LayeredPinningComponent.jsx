import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";
import ThirdSection from "./ThirdSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";

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
  }, []);

  return (
    <>
      <div id="container">
        <section className="static md:relative panel one px-6 sm:px-0">
          <FirstSection />
        </section>
        <section className="panel two px-6 sm:px-0">
          <SecondSection />
        </section>
        <section className="panel three px-6 sm:px-0">
          <ThirdSection />
        </section>
        <section className="panel four px-6 sm:px-0">
          <FourthSection />
        </section>
        <section className="panel five px-6 sm:px-0">
          <FifthSection />
        </section>
        <section className="panel six px-6 sm:px-0">
          <SixthSection />
        </section>
      </div>
    </>
  );
}

export default LayeredPinningComponent;
