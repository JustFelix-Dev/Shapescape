import shapescapeLogo from "../assets/shapescape.svg";
import headerGreen from "../assets/header-green.svg";
import headerCircle from "../assets/header-circle.svg";
import headerSquare from "../assets/header-square.svg";
import headerTriangle from "../assets/header-triangle.svg";
import headerRectangle from "../assets/header-rect.svg";
import headerPill from "../assets/header-pill.svg";
import headerCircleShade from "../assets/header-circle-shade.svg";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";
import { IoCloseSharp } from "react-icons/io5";
import { useState } from "react";

const FirstSection = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  if (openMenu) {
    return (
      <div className="absolute h-[100vh] inset-0 z-[999] bg-based">
        <nav className="flex h-[68px] justify-between items-center px-[8px]">
          <div>
            <img
              src={shapescapeLogo}
              className="h-[22px]"
              alt="shapescape-logo"
            />
          </div>
          <div onClick={handleOpenMenu}>
            <IoCloseSharp color="white" className="cursor-pointer" size={28} />
          </div>
        </nav>
      </div>
    );
  }
  return (
    <div className="first-section w-full max-w-[1121px] mx-auto">
      <div className="flex flex-col gap-[5rem] pt-[1.5rem]">
        <nav className="flex justify-between items-center">
          <div>
            <img src={shapescapeLogo} className="h-[22px] md:h-auto" alt="shapescape-logo" />
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
          <FiMenu
            onClick={handleOpenMenu}
            className="hamburger cursor-pointer "
            color="white"
            size={24}
          />
        </nav>
        <section className="first-content flex justify-between">
          <div className=" text-white text-[50px] max-w-[13ch] font-extrabold leading-[55px] header">
            Using games as a way to educate and tell stories
          </div>
          <p className="first-paragraph text-white max-w-[46ch] self-end text-[13.66px] leading-[19.12px]">
            One of the best ways to learn is through play. We bring the
            experience to translate your teaching objective into Minecraft
            worlds and gamify any experience.
          </p>
        </section>
      </div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2, duration: 2 } }}
        className="absolute hidden md:block bottom-[5rem] left-0"
      >
        {" "}
        <img src={headerGreen} alt="header-green" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.3, duration: 2 } }}
        className="absolute hidden md:block left-[24rem] bottom-[22rem]"
      >
        {" "}
        <img src={headerCircle} alt="header-circle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.6, duration: 2 } }}
        className="absolute hidden md:block left-[16rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerSquare} alt="header-square" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 2.8, duration: 2 } }}
        className="absolute hidden md:block right-[32rem] bottom-[6rem] rotate-[20deg]"
      >
        {" "}
        <img src={headerTriangle} alt="header-triangle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute hidden md:block right-[10rem] bottom-[13rem]"
      >
        {" "}
        <img src={headerRectangle} alt="header-rectangle" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute hidden md:block right-[16rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerPill} alt="header-pill" />
      </motion.div>
      <motion.div
        initial={{ y: "-1000px" }}
        animate={{ y: 0, transition: { delay: 3, duration: 2 } }}
        className="absolute hidden md:block right-[6rem] bottom-[4rem]"
      >
        {" "}
        <img src={headerCircleShade} alt="header-circle-shade" />
      </motion.div>
    </div>
  );
};

export default FirstSection;
