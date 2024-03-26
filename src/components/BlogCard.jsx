const BlogCard = ({ image, title, content }) => {
  return (
    <div className="blog-card flex items-center gap-16">
      <div>
        <img
          src={image}
          className="h-[281px] w-[500px] rounded-[25px]"
          alt="blog-image"
        />
      </div>
      <div className="flex flex-col gap-2">
        <span className="self-start px-[24px] py-[8px] text-[14px] text-based border border-based rounded-full">
          Education
        </span>
        <span className=" max-w-[25ch] text-left text-[24px] font-bold text-based">
          {title}
        </span>
        <p className="text-[16px] blog-content text-left max-w-[479px] text-[#162c49]">
          {content}
        </p>
        <a
          href="#"
          className=" text-left cursor-pointer text-[16px] text-based font-semibold"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
