import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa6";
import img from "../assets/chellalaziz.jpg";
// import AOS from "aos";

const Banner = () => {
  // AOS.init();
  return (
    <div
      id="Banner"
      className="px-2 py-8  text-center gap-5 flex flex-col-reverse justify-between  lg:flex-row lg:gap-28 items-center lg:text-start lg:px-40  "
    >
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="h-full lg:py-10 flex flex-col justify-center items-center text-white lg:items-start"
      >
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          welcome to <span>My Website</span>
        </h1>
        <p>
          I&apos;m a web developer with a focus on the MERN stack, but still
          exploring other technologies and frameworks that catch my interest! if
          you&apos;re looking for a developer to add to your team, I&apos;d love
          to hear from you!
        </p>
        <div className="flex mt-8 gap-2 ">
          <div className="flex items-center justify-center">
            <div
              className="flex space-x-2"
              // data-aos="fade-up"
              // data-aos-offset="200"
              // // data-aos-delay="50"
              // data-aos-duration="1000"
              // data-aos-easing="ease-in-out"
            >
              <a
                href="https://www.github.com/azizchelchel"
                target="blank"
                className="text-fuchsia-600  hover:text-fuchsia-500  rounded-full glow p-2"
              >
                <AiFillGithub className="text-[28px]" />
              </a>
              <a
                href=""
                className="text-fuchsia-600  hover:text-fuchsia-500  rounded-full glow p-2"
              >
                <FaLinkedinIn className="text-[28px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        src={img}
        alt="image"
        width={300}
        height={100}
        className="rounded-full shine border-2 p-1 border-fuchsia-500"
      />
    </div>
  );
};

export default Banner;
