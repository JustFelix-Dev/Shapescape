import learnMoreImage from "../assets/learnMore.svg";

const ProjectCard = ({ image, type, title, content, bgColor }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-3 h-[350px] md:h-[493px] w-[530px] project-card">
      <div className="relative image-container  transition-all overflow-hidden rounded-[8px] md:rounded-[28px] h-[338px] w-full ">
        <img src={image} alt={title} className="h-full object-cover w-full" />
        <div className="overlay absolute transition-all bg-[rgb(0,0,0,.2)] inset-0 opacity-[0.1] z-10">
          <div className="flex items-center justify-center gap-2 h-[338px] overlay-text">
            <span className="text-white text-[14px] md:text-[18px] font-semibold ">
              Learn more
            </span>
            <img src={learnMoreImage} alt="learn-more" className="read-more" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-left">
        <span
          className={`text-based text-[9px] md:text-[14px] rounded-full self-start font-semibold px-[12px] py-[6px] bg-[${bgColor}] card-type `}
        >
          {type}
        </span>
        <p className="font-bold text-based text-[18px] md:text-[28px]">
          {title}
        </p>
        <span className=" text-[12px] md:text-[16px] leading-[24px] max-w-[48ch] text-based">
          {content}
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
