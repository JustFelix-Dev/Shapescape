import shapescapeLogo from "../assets/shapescape.svg";

const FirstSection = () => {
  return (
    <div className="first-section w-full max-w-[1121px] mx-auto border">
        <div className="flex flex-col gap-[5rem] pt-[1.5rem]" >
      <nav className="flex justify-between items-center">
        <div>
        <img src={shapescapeLogo} alt="shapescape-logo" />
        </div>
        <ul className="flex gap-4">
         <li className="text-white text-[16px] p-[20px]">Education</li>
         <li className="text-white text-[16px] p-[20px]">About</li>
         <li className="text-white text-[16px] p-[20px]">Catalog</li>
         <li className="text-white text-[16px] p-[20px]">Blog</li>
         <li className="text-white text-[16px] p-[20px]">Jobs</li>
         <li className="text-white text-[16px] p-[20px]">Contact</li>
        </ul>
      </nav>
      <section className="flex justify-between">
        <div className=" text-white text-[50px] max-w-[13ch] font-extrabold leading-[55px]" >Using games as a way to educate and tell stories</div>
        <p className="text-white max-w-[46ch] self-end text-[13.66px] leading-[19.12px]">One of the best ways to learn is through play. We bring the experience to translate your teaching objective into Minecraft worlds and gamify any experience.</p>
      </section>

        </div>
    </div>
  )
}

export default FirstSection
