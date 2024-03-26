import footerShapescape from "../assets/footer-shapescape.svg";

const SixthSection = () => {
  return (
    <div className="w-full text-center flex flex-col gap-8 max-w-[1121px] mx-auto">
      <div>
        <img src={footerShapescape} alt="logo" />
      </div>
      <div className="flex gap-4 ">
        <h2 className="text-[46px] font-bold text-based max-w-[14ch] text-left leading-[51px]">
          Using games to excite.
        </h2>
        <div className="flex justify-between w-full text-left">
          <ul className="flex flex-col gap-4 text-[16px] text-based">
            <li></li>
            <li>Education</li>
            <li>About</li>
            <li>Catalog</li>
            <li>Blog</li>
            <li>Jobs</li>
          </ul>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 text-[16px] text-based">
              <h5 className="text-[18px] font-semibold">Administration</h5>
              <span>Roskildevej 100, 3. mf.</span>
              <span>2000 Frederiksberg, Denmark</span>
            </div>
            <div className="flex flex-col gap-3 text-[16px] text-based">
              <h5 className="text-[18px] font-semibold">Production</h5>
              <span>Caffamacherrehie 8</span>
              <span>20355 Hamburg, Germany</span>
            </div>
            <div></div>
          </div>
          <div className="flex flex-col gap-3 text-[16px] text-based">
            <h5 className="text-[18px] font-semibold">Contacts</h5>
            <a>+4523645706</a>
            <a href="#">contact@shapescape.com</a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 text-[#44566e] text-[14px]">
          <span>Copyright &copy; Shapescape 2024</span>
          <li className="list-disc list-inside">
            <a href="#">Privacy Policy</a>
          </li>
          <li className="list-disc list-inside">
            <a href="#">
              Terms and Conditions{" "}
            </a>
          </li>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-based font-medium text-[16px] px-[16px] py-[12px] flex justify-center items-center rounded-full bg-[#CFB7F5]"
          >
            YouTube
          </a>
          <a
            href="#"
            className="text-based font-medium text-[16px] px-[16px] py-[12px] flex justify-center items-center rounded-full bg-[#CFB7F5]"
          >
            Twitter
          </a>
          <a
            href="#"
            className="text-based font-medium text-[16px] px-[16px] py-[12px] flex justify-center items-center rounded-full bg-[#CFB7F5]"
          >
            Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default SixthSection;
