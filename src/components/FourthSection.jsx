import microsoft from "../assets/microsoft.svg";
import firenze from "../assets/firenze.svg";
import tudelft from "../assets/tudelft.svg";
import malaysia from "../assets/malaysia.svg";
import michigan from "../assets/michigan.svg";
import erasmus from "../assets/erasmus.svg";
import bbc from "../assets/bbc.png";
import minecraft from "../assets/minecraft.svg";
import worldBank from "../assets/world-bank.svg";
import ormond from "../assets/ormond.svg";
import victoria from "../assets/victoria.svg";
import marvellous from "../assets/marvelous.svg";

const FourthSection = () => {
  return (
    <div className="w-full text-center max-w-[1121px] mx-auto">
      <header className="text-white text-[44px] font-bold">
        Notable Clients
      </header>
      <p className="text-white text-[16px]">
        Over the years we have worked on our projects with a variety of partners
      </p>
      <section className="clients">
        <div >
          <img src={microsoft} alt="microsoft-image" />
        </div>
        <div>
          <img src={firenze} alt="firenze image" />
        </div>
        <div>
          <img src={tudelft} alt="tudelft image" />
        </div>
        <div>
          <img src={malaysia} alt="malaysia image" />
        </div>
        <div>
          <img src={michigan} alt="michigan image" />
        </div>
        <div>
          <img src={erasmus} alt="erasmus image" />
        </div>
        <div>
          <img src={bbc} alt="bbc image" />
        </div>
        <div>
          <img src={minecraft} alt="minecraft image" />
        </div>
        <div>
          <img src={worldBank} alt="world-bank image" />
        </div>
        <div>
          <img src={ormond} alt="ormond image" />
        </div>
        <div>
          <img src={victoria} alt="victoria image" />
        </div>
        <div>
          <img src={marvellous} alt="marvellous image" />
        </div>
      </section>
    </div>
  );
};

export default FourthSection;
