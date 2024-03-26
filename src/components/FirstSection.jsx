import shapescapeLogo from "../assets/shapescape.svg";
import headerGreen from "../assets/header-green.svg";
import headerCircle from "../assets/header-circle.svg";
import headerSquare from "../assets/header-square.svg";
import headerTriangle from "../assets/header-triangle.svg";
import headerRectangle from "../assets/header-rect.svg";
import headerPill from "../assets/header-pill.svg";
import headerCircleShade from "../assets/header-circle-shade.svg";
import { motion } from "framer-motion";

const FirstSection = () => {
  return (
    <div className="first-section w-full max-w-[1121px] mx-auto">
      <div className="flex flex-col gap-[5rem] pt-[1.5rem]">
        <nav className="flex justify-between items-center">
          <div>
            <img src={shapescapeLogo} alt="shapescape-logo" />
          </div>
          <ul className=" nav-list flex gap-4">
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              Education <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              About <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              Catalog <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              Blog <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              Jobs <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
            <li className="relative flex items-center justify-center text-white text-[16px] p-[20px]">
              Contact <i className="absolute bottom-2 fa-solid fa-square"></i>
            </li>
          </ul>
        </nav>
        <section className="flex justify-between">
          <div className=" text-white text-[50px] max-w-[13ch] font-extrabold leading-[55px]">
            Using games as a way to educate and tell stories
          </div>
          <p className="text-white max-w-[46ch] self-end text-[13.66px] leading-[19.12px]">
            One of the best ways to learn is through play. We bring the
            experience to translate your teaching objective into Minecraft
            worlds and gamify any experience.
          </p>
        </section>
      </div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2, duration: 2 } }}
        className="absolute bottom-[5rem] left-0"
      >
        {" "}
        <img src={headerGreen} alt="header-green" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.3, duration: 2 } }}
        className="absolute left-[24rem] bottom-[22rem]"
      >
        {" "}
        <img src={headerCircle} alt="header-circle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.6, duration: 2 } }}
        className="absolute left-[16rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerSquare} alt="header-square" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.8, duration: 2 } }}
        className="absolute right-[32rem] bottom-[6rem] rotate-[20deg]"
      >
        {" "}
        <img src={headerTriangle} alt="header-triangle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute right-[10rem] bottom-[13rem]"
      >
        {" "}
        <img src={headerRectangle} alt="header-rectangle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute right-[16rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerPill} alt="header-pill" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute right-[6rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerCircleShade} alt="header-circle-shade" />
      </motion.div>
    </div>
  );
};

export default FirstSection;
