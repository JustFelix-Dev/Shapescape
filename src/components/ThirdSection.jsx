import ProjectCard from "./ProjectCard";
import artemis from "../assets/artemis.webp";
import planetEarth from "../assets/planet-earth.webp";
import tractor from "../assets/tractor-craft.webp";
import warden from "../assets/warden.webp";
import frozenPlanet from "../assets/frozen-planet.webp";
import greatOrmond from "../assets/great-ormond.webp";
import readMoreIcon from "../assets/readMore.svg";
import BlogCard from "./BlogCard";
import downloadImage from "../assets/downloads.webp";
import metaVerseImage from "../assets/metaverse.webp";
import minecraftImage from "../assets/minecraft.webp";
import whitePill from "../assets/white-pill.png";
import purpleSquare from "../assets/purple-square.png";
import greenHalf from "../assets/green-half.png";

const ThirdSection = () => {
  return (
    <div className="third-section w-full text-center max-w-[1121px] mx-auto">
      <header className="text-based mx-auto text-[44px] font-bold leading-[53px] text-center max-w-[20ch]">
        We are proud of our creations
      </header>
      <section className="flex justify-between gap-10 flex-wrap">
        <ProjectCard
          image={artemis}
          type={"Educational"}
          title={"Frozen Planet 2"}
          content={
            "Blast off to the Moon with Artemis:Rocket Builds in Minecraft Education!"
          }
          bgColor={"#CDF462"}
        />
        <ProjectCard
          image={planetEarth}
          type={"Educational"}
          title={"Planet Earth III"}
          content={"Experience survival as predator and prey!"}
          bgColor={"#CDF462"}
        />
        <ProjectCard
          image={tractor}
          type={"Educational"}
          title={"TractorCraft:Secrets of Soil"}
          content={
            "Explore the secrets of soil in TractorCraft: Secrets of Soil! Learn about agriculture and the amazing wonders of farming through this new world, Sponsored by John Deere."
          }
          bgColor={"#CDF462"}
        />
        <ProjectCard
          image={warden}
          type={"Commercial"}
          title={"Warden Dimension"}
          content={
            "Go even deeper  than the deep dark! Discover the Warden Dimension! A completely new dimension to explore! Explore dark, eerie biomes full of monstrous creatures, unique..."
          }
          bgColor={"#CFB7F5"}
        />
        <ProjectCard
          image={frozenPlanet}
          type={"Educational"}
          title={"Frozen Planet 2"}
          content={
            "Explore the worlds of Frozen Planet 2 in Minecraft, learn and document about wonderful animals and see how our world is being affected by rapid changes in our climate!"
          }
          bgColor={"#CFB7F5"}
        />
        <ProjectCard
          image={greatOrmond}
          type={"Educational"}
          title={"Great Ormond Street Hospital"}
          content={
            "Explore the Great Ormond Street Hospital and get to know the complex before your visit. Chat and interact with other patients and feel right at home. Walk through the colorful hallways an...."
          }
          bgColor={"#CFB7F5"}
        />
      </section>
      <div className="flex items-center justify-center gap-2 text-center">
        <span className="text-[#041C3B] text-[18px] font-semibold">
          See more Projects
        </span>{" "}
        <img
          src={readMoreIcon}
          className="transition-all read-more"
          alt="read-more"
        />
      </div>

      <div className="stats flex gap-6 ">
        <div className="flex justify-center items-center rounded-lg bg-[#F3F6FA]">
          <div className="flex flex-col gap-4">
            <p>Some cool stats!</p>
            <div>
              <p className="text-[100px] text-[#162C49] font-bold">11%</p>
              <p className="text-center">
                increase in knowledge recall when taught through gamification
              </p>
            </div>
            <span className="text-[16px] text-based border border-based px-[26px] py-[8px] rounded-full">
              01/03
            </span>
          </div>
        </div>
        <div className="flex justify-center items-center rounded-lg bg-[#CDF462]">
          <div className="flex flex-col ">
            <img src={whitePill} alt="white-pill image" />
            <img src={purpleSquare} alt="purplesquare image" />
            <img src={greenHalf} alt="greenhalf image" />
          </div>
        </div>
      </div>

      <div className="our-blog">
        <div className="flex justify-between">
          <header className="text-based text-[36px] font-bold">Our blog</header>
          <div className="flex items-center justify-center gap-2 text-center">
            <span className="text-[#041C3B] text-[18px] font-semibold">
              Go to the blog
            </span>{" "}
            <img
              src={readMoreIcon}
              className="transition-all read-more"
              alt="read-more"
            />
          </div>
        </div>
        <section className="flex flex-col gap-12">
          <BlogCard
            image={downloadImage}
            title={"Six Million downloads for Disaster Defense!"}
            content={
              "Disaster Defense, an educational Minecraft World crafted by Shapescape, has just hit a whopping 6 million downloads. That's right, 6 million! This isn't just a game; it's a global classroom that's teaching kids about resilience in the face of natural disasters."
            }
          />
          <BlogCard
            image={metaVerseImage}
            title={"Educating in a metaverse using Minecraft!"}
            content={
              "Minecraft is a game with no rules, objectives, winners, or losers. It's a blank canvas that can be molded into anything you want it to be. You can build structures, explore the vastness of space, or even go on adventures through time and space!The game has been around since 2009, and its popularity is constantly increasing among youth and broader audiences. Minecraft is a fantastic platform to bring education to a metaverse. Let us tell you how & why!"
            }
          />
          <BlogCard
            image={minecraftImage}
            title={"Teaching Chemistry in Minecraft"}
            content={
              "Use chemistry to create new Minecraft items like helium balloons and sparklers, view elements in the periodic table and build a custom laboratory in Minecraft!"
            }
          />
        </section>
      </div>
    </div>
  );
};

export default ThirdSection;
