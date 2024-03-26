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
        <section className="relative panel one">
          <FirstSection />
        </section>
        <section className="panel two">
          <SecondSection />
        </section>
        <section className="panel three">
          <ThirdSection />
        </section>
        <section className="panel four">
          <FourthSection/>
        </section>
        <section className="panel five">
          <FifthSection/>
        </section>
        <section className="panel six">
          <SixthSection/>
        </section>
      </div>
    </>
  );
}

export default LayeredPinningComponent;
