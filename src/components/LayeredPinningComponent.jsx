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
        end: "+=10000%",
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
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
            nostrum voluptatem accusamus alias quasi provident ipsa tempora ut
            iste quod cupiditate repellat culpa ex assumenda quos facilis
            aperiam distinctio voluptates rerum, deleniti sint? Beatae voluptate
            sint quaerat neque maxime voluptatibus, nostrum facere officia,
            velit et eius aut architecto alias exercitationem voluptas quisquam
            reiciendis voluptates in excepturi quae consequatur soluta fuga!
            Beatae perspiciatis optio accusamus facilis ratione ea odio
            veritatis quod eligendi expedita. Tenetur doloribus, totam
            reprehenderit corrupti id eaque qui sequi consequuntur, voluptas
            autem nobis! Recusandae quae non, aut atque nostrum omnis, maiores
            animi totam voluptate, doloribus perspiciatis! Vero, repellat! Unde
            tenetur harum, rem commodi eius itaque reprehenderit ex minus
            voluptates hic! Placeat iusto corporis cumque dignissimos hic, quas
            porro. Nesciunt tenetur odio possimus magni eligendi modi eius
            dolorem animi quis corporis quas reprehenderit error sit ut est,
            consequuntur aspernatur quam ea magnam beatae at dolore. Autem eum
            iste sit nisi inventore laboriosam placeat quae. Veritatis nisi
            aspernatur repellendus eveniet repellat molestias eos adipisci.
            Ducimus, eius. Temporibus illum expedita maiores. Qui, quam harum
            velit aut commodi est debitis ut minus iure facere ratione possimus
            dolorem! Nihil maiores nobis cum et magni perferendis beatae nemo ut
            eos atque! At, asperiores totam.
          </div>
        </section>
        <section className="panel five"></section>
        <section className="panel six"></section>
        <header></header>
      </div>
    </>
  );
}

export default LayeredPinningComponent;
