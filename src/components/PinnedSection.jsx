import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
// import { useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const PinnedSection = () => {

    useGSAP(()=>{
        gsap.utils.toArray(".section").forEach((container,i)=>{
            ScrollTrigger.create({
                trigger: container,
                start: "top top",
                pin: true,
                pinSpacing: false,
                snap:1,
            })

            gsap.from(container.children, {
                y:0,
                opacity:1,
                scrollTrigger: {
                    trigger : container,
                    start: "bottom center",
                    end: "bottom bottom",
                    toggleActions: "play none reverse reset"
                }
            })
        })
    },[])
  return (
    <div className="scroll-animation">
      <div className="container">
        <div className="section section-1">
            <h1>Airpods</h1>
        </div>
        <div className="section section-2">
            <h1>Homepod</h1>
        </div>
        <div className="section section-3">
            <h1>TeamPod</h1>
        </div>
        <div className="section section-4">
            <h1>FishPod</h1>
        </div>
      </div>
    </div>
  )
}

export default PinnedSection
