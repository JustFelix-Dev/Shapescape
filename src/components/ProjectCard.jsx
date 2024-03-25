import learnMoreImage from "../assets/learnMore.svg";

const ProjectCard = ({ image, type, title, content, bgColor }) => {
  return (
    <div className="cursor-pointer flex flex-col gap-3 h-[493px] w-[500px] project-card">
      <div className="relative image-container  transition-all overflow-hidden rounded-[28px] h-[338px] w-[577px]">
        <img src={image} alt={title} className="h-full" />
        <div className="overlay absolute transition-all bg-[rgb(0,0,0,.2)] inset-0 opacity-[0.1] z-10">
          <div className="flex items-center justify-center gap-2 h-[338px] overlay-text">
            <span className="text-white text-[18px] font-semibold ">
              Learn more
            </span>
            <img src={learnMoreImage} alt="learn-more" className="read-more" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-1 text-left">
        <span
          className={`text-based text-[14px] rounded-full self-start font-semibold px-[12px] py-[6px] bg-[${bgColor}] card-type `}
        >
          {type}
        </span>
        <p className="font-bold text-based text-[28px]">{title}</p>
        <span className="text-[16px] leading-[24px] text-based">{content}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
