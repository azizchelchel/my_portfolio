import { FaArrowTurnDown } from "react-icons/fa6";
import img from "../assets/itsme.png";

const About = () => {
  return (
    <div
      id="About"
      className="px-2 lg:px-40 py-8 lg:py-20 text-center gap-5 lg:text-start flex flex-col justify-between  lg:flex-row-reverse lg:gap-28 items-center"
    >
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        // data-aos-delay="50"
        // data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="h-full  flex flex-col justify-center items-center text-white lg:items-start"
      >
        <h1 className="text-[52px] font-semibold mb-8 leading-normal">
          ABOUT ME
        </h1>
        <div>
          With expertise in software development, I am proficient in TypeScript
          and JavaScript, as well as frameworks such as React and Next.js for
          Frontend and Node.js(Express, ...) for Backend. My rapid learning and
          close collaboration with clients allow me to design effective,
          scalable and user-friendly solutions to solve real-world problems.
          Let&apos;s work together to make your ideas come true!
          <div>
            <p>
              You find here my CV{" "}
              <span className="pl-1 inline-block">
                <FaArrowTurnDown className="text-orange-700" />
              </span>
            </p>
          </div>
        </div>
        <div className="flex mt-8 gap-2 ">
          <div className="flex items-center justify-center">
            <div className="flex space-x-2">
              <button className="resume-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2 hover:bg-fuchsia-800 border-fuchsia-800 rounded-lg py-4 px-8 uppercase relative overflow-hidden ">
                <a
                  href="https://www.github.com/azizchelchel/CV/blob/main/CV_CHELLAL_Aziz.doc"
                  target="_blank"
                  rel="noreferrer"
                >
                  RESUME
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <img
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        // data-aos-duration="1000"
        // data-aos-easing="ease-in-out"
        src={img}
        alt="image"
        width={300}
        height={300}
        className="rounded-full shine border-2 p-1 border-fuchsia-500"
      />
    </div>
  );
};

export default About;
