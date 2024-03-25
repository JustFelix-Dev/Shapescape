import readMoreIcon from "../assets/readMore.svg";

const SecondSection = () => {
  return (
    <div className="second-section w-full text-center max-w-[1121px] mx-auto">
      <p className=" max-w-[24ch] mx-auto text-center text-[44px] text-[#041C3B] font-extrabold leading-[62px]">
        We are Shapescape.Since 2013 we have sought to{" "}
        <span className="bg-[#CDF462] px-[16px] py-[4px] rounded-full">
          educate
        </span>{" "}
        children through play and create interactive{" "}
        <span className="bg-[#CFB7F5] px-[16px] py-[4px] rounded-full">
          art pieces
        </span>{" "}
        through Minecraft.
      </p>
      <span className="flex cursor-pointer items-center gap-2">
        <span className="text-[#041C3B] text-[18px] font-semibold">
          Read more
        </span>{" "}
        <img
          src={readMoreIcon}
          className=" transition-all read-more"
          alt="read-more"
        />
      </span>
    </div>
  );
};

export default SecondSection;
