 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
 import { ScrollTrigger } from 'gsap/ScrollTrigger';
 
 gsap.registerPlugin(ScrollTrigger);

const RevealLayer = () => {

    useGSAP(()=>{

gsap.to(".panel:not(:last-child)", {
  yPercent: -100, 
  ease: "none",
  stagger: 0.5,
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=300%",
    scrub: true,
    pin: true
  }
});


gsap.set(".panel", {zIndex: (i, target, targets) => targets.length - i});
    })
  return (
<>
 <div id="container">   
 <div className="description panel">
     <div><h1>Layered pinning from bottom</h1>
       <p>A simple example where overlapping panels reveal from the bottom.</p>
       <div className="scroll-down">Scroll down<div className="arrow"></div></div>
     </div>
   </div>
 
 
   <section className="panel red">
     <div>
       ONE
     </div>
   </section>
   <section className="panel orange">
     <div>
       TWO
     </div>
   </section>
   <section className="panel purple">
     THREE
   </section>
 
 </div>
 
 <header>
    <a href="https://greensock.com/scrolltrigger">
      <img className="greensock-icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/scroll-trigger-logo-light.svg" width="200" height="64" />
   </a> 
 </header>

</>
  )
}

export default RevealLayer
