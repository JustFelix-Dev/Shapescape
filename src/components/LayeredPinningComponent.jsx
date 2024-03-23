import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FirstSection from './FirstSection';
import SecondSection from './SecondSection';

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
      <section className="panel red">
       <FirstSection/>
      </section>
      <section className="panel orange">
        <SecondSection/>
      </section>
      <section className="panel purple">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut consequatur molestiae natus, recusandae veritatis nobis doloremque minus! Nam quibusdam provident aspernatur architecto labore voluptas aut natus in, sed officiis ipsam molestiae quas temporibus consequuntur facilis iusto eos quod fugit culpa eveniet harum? Dolor, aspernatur voluptatem illum asperiores consequatur qui corporis dolore repellendus molestias. Ipsam placeat culpa tempore dicta id, excepturi accusantium quod dolore ratione saepe cumque quasi unde illum praesentium fuga dignissimos, eaque a suscipit. Quasi distinctio minus officiis mollitia, quis id tempora reiciendis dolore nisi excepturi, natus minima est perspiciatis, placeat vel error veritatis sit esse quaerat iste. Facere quas doloribus repellat delectus impedit. Optio, ex excepturi? Consequatur delectus expedita, rem deserunt vitae natus temporibus aperiam amet error mollitia, autem numquam quisquam unde, facilis obcaecati. Ipsa consequatur illum eum, odio molestiae cum totam. Nisi magnam, dicta quasi eum necessitatibus natus nihil culpa voluptates veritatis veniam magni adipisci earum porro laborum, sed voluptas? Odit, illo quis nobis perferendis provident consequuntur. Fuga placeat aliquam quis sunt sed doloribus dolorum nesciunt reiciendis reprehenderit, optio maiores facilis ipsum in aperiam id, qui autem quos distinctio quidem cumque facere iste odio. Repudiandae obcaecati, porro nemo veniam et consectetur suscipit quia odio mollitia, ad consequatur itaque commodi fuga incidunt earum error fugit neque. Ullam vero illo reprehenderit tenetur odit, ut, quod aperiam natus accusantium hic laudantium repudiandae quidem, suscipit eos exercitationem dignissimos voluptas. Libero mollitia necessitatibus recusandae nisi nulla consequatur molestiae, distinctio veniam autem soluta praesentium atque quidem odit quo ut quaerat culpa nesciunt earum magni numquam aliquam natus porro totam. Ratione sit aliquam culpa iste architecto! Maiores neque tempora laboriosam aperiam doloribus perferendis modi a incidunt corrupti esse, est praesentium vero suscipit sapiente atque accusamus nesciunt placeat in reiciendis? Fugit at doloribus neque vitae quaerat doloremque eaque animi laborum deleniti, voluptatum tenetur modi nihil, unde tempora corrupti labore, excepturi dolor. Sed, molestiae commodi numquam culpa cumque illum eos provident! Optio quas adipisci facilis ab est ad repellendus commodi eaque iste cumque laudantium atque dolorem dolores debitis sequi deserunt, tempora officiis consectetur magnam odio. Repellat autem veniam ipsum soluta quod tenetur commodi et optio ab doloremque consequatur quia quisquam blanditiis quasi laudantium esse delectus, voluptas tempore. Quam vitae, exercitationem nesciunt ad quos quisquam? Odit sint fugit impedit perferendis culpa est! Quisquam maiores, neque nostrum est voluptate culpa libero iure, provident, exercitationem reprehenderit ad ipsum consequatur obcaecati aliquam earum quibusdam? Numquam quos veniam facilis ipsam debitis!
      </section>
    </div>
    <header>
      {/* ... header content ... */}
    </header>

    </>
  );
}

export default LayeredPinningComponent;
