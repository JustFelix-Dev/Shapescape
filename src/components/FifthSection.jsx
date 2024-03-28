import pinkSquare from "../assets/pink-square.png";
import whiteSquare from "../assets/white-square.png";

const FifthSection = () => {
  return (
    <div className="w-full max-w-[1121px] mx-auto">
      <div className="flex flex-col gap-8 relative">
        <h2
          className=" text-[30px] text-center md:text-left sm:text-[40px] md:text-[50px] font-bold text-based 
        max-w-[25ch] md:max-w-[20ch] leading-[44px] md:leading-[55px]"
        >
          Stay up to date with our newsletter!
        </h2>
        <p className="text-[#162C49] text-center md:text-left text-[16px] max-w-[70ch] md:max-w-[50ch]">
          By subscribing we will keep you updated on our latest releases,
          blogposts and other projects.
        </p>
        <div className="letter-box flex">
          <input
            className="rounded-tl-[50px] rounded-bl-[50px]  h-[48px] sm:h-[58px] w-[420px] pt-[14px] pr-[0] pb-[14px] pl-[30px] text-based border-[0] outline-none"
            type="text"
            placeholder="Your Email"
          />
          <button className="bg-based text-[16px] font-semibold h-[48px] sm:h-[58px] w-[180px] flex items-center justify-center text-white rounded-tr-[50px] rounded-br-[50px]">
            Subscribe
          </button>
        </div>
        <div className="absolute hidden md:block -right-[6rem] -top-[6rem]">
          <img src={pinkSquare} alt="pink-square" />
        </div>
        <div className="absolute hidden md:block right-[1rem] -bottom-[8rem] ">
          <img src={whiteSquare} alt="white-square" />
        </div>
      </div>
    </div>
  );
};

export default FifthSection;
