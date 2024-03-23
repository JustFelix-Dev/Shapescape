import shapescapeLogo from "../assets/shapescape.svg";

const FirstSection = () => {
  return (
    <div className="first-section w-full max-w-[1121px] mx-auto border">
      <nav className="flex justify-between items-center">
        <div>
        <img src={shapescapeLogo} alt="shapescape-logo" />
        </div>
        <ul className="flex gap-6">
         <li className="text-white text-[16px] p-[20px]">Education</li>
         <li className="text-white text-[16px] p-[20px]">About</li>
         <li className="text-white text-[16px] p-[20px]">Catalog</li>
         <li className="text-white text-[16px] p-[20px]">Blog</li>
         <li className="text-white text-[16px] p-[20px]">Jobs</li>
         <li className="text-white text-[16px] p-[20px]">Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default FirstSection
