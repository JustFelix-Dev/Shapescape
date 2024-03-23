import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import FirstSection from './FirstSection';

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
        <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque reiciendis amet provident porro nihil! Veniam deleniti ullam beatae dicta. Minima incidunt rem accusamus id molestiae, expedita facilis neque fugit quos. Corporis, voluptatum iusto voluptatibus quos voluptas cum ullam laudantium nisi ab aliquid quibusdam veniam, temporibus voluptatem, sapiente aperiam harum accusantium rem aut nostrum unde veritatis? Repellendus, libero officia blanditiis, commodi officiis soluta ipsa facilis dolore corrupti delectus quisquam, id placeat autem eius asperiores? Similique beatae ipsa praesentium earum! Dolor laborum inventore aliquid asperiores veniam dolorem ipsa dolore vitae tempora maxime aspernatur, esse laudantium iusto expedita maiores fugiat atque. Ab ipsa, eos amet quae at, alias quisquam earum rem dicta aperiam architecto similique quidem officia ipsum, accusantium ipsam necessitatibus assumenda ad. Provident in modi quibusdam. Ipsa minima consequuntur voluptates ab deserunt nisi? Iste nemo explicabo adipisci, dolor magni at unde officia in blanditiis voluptatum placeat deleniti neque quis rem eaque necessitatibus. Dignissimos tempore doloremque eaque veniam possimus saepe ad totam culpa odit doloribus, deserunt itaque explicabo delectus amet rerum recusandae qui consectetur labore sapiente magnam aut? Deleniti laborum tempore, nemo necessitatibus placeat tenetur dolore reprehenderit, veniam nam nostrum quo labore accusantium assumenda voluptatibus cum mollitia enim magnam incidunt saepe exercitationem eligendi beatae ipsa quis? Dicta eius amet, officia distinctio assumenda itaque officiis, totam nostrum quia obcaecati doloremque. Laborum aut cumque, a ab inventore sit nam aliquid voluptates laudantium ea alias officia dolore saepe rerum perferendis facere delectus voluptas vel corrupti quo quos dolor sunt, quidem ullam. Ullam dolorem deserunt ducimus aliquam cum amet perspiciatis magnam at dolores numquam illo laboriosam consectetur est non eum doloribus nobis aspernatur, earum unde vel. Quos, tempora! Tenetur, quidem itaque molestias praesentium aliquid consectetur deleniti quo dolorum amet debitis fugiat corporis odit officia quos soluta, ducimus alias minima architecto culpa! Hic error voluptatem quidem accusantium id, voluptates totam unde ea fugit iusto delectus sunt, mollitia dolorem! Obcaecati quidem ullam fuga cum. Libero laudantium aut, soluta sint quis, voluptas qui incidunt consectetur accusamus, labore hic accusantium explicabo quam nobis provident dolores quod? Quia minus facilis, sunt harum saepe eligendi reiciendis rerum fugit praesentium sit voluptas ex ratione eos, provident dolore velit nulla, deserunt ipsum illo consequatur soluta possimus necessitatibus officiis dignissimos? Exercitationem ab facere eligendi rem voluptates consequatur nostrum itaque a quasi minus, incidunt recusandae, alias delectus aliquid molestias porro sequi dicta, necessitatibus ipsam magnam quod iure tempora error optio! Vero vel nobis explicabo impedit illum repellendus?</div>
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
