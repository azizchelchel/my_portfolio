import React from "react";

const Projects = () => {
  return (
    <div id="Projects" className="">
      <div className="px-2 lg:px-40 py-8 lg:py-8 text-center gap-5 lg:text-start flex flex-col justify-between   lg:gap-28 items-center">
        <h1
          data-aos="fade-left"
          data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          className="flex justify-center uppercase  text-[52px] text-white font-semibold mb-8 leading-normal"
        >
          PROJECTS
        </h1>
        <div className="flex flex-col items-center  justify-between md:flex-row md:justify-evenly lg:justify-evenly px-[4rem] w-full  pb-8">
          <div className="flex flex-col gap-10 p-5 lg:flex-row lg:justify-evenly">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              className="flex justify-center items-center h-[8rem] w-[10rem] tabs text-fuchsia-600 shadow-xl border-2  border-fuchsia-800 rounded-tl-2xl rounded-br-2xl"
            >
              <p>HTML</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              className="flex justify-center items-center h-[8rem] w-[10rem]  tabs text-fuchsia-600 shadow-xl border-2  border-fuchsia-800 rounded-tl-2xl rounded-br-2xl"
            >
              <p>CSS</p>
            </div>
          </div>
          <div className="flex flex-col gap-10 p-5 lg:flex-row lg:justify-evenly">
            <div
              data-aos="fade-right"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              className="flex justify-center items-center h-[8rem] w-[10rem] tabs text-fuchsia-600 shadow-xl border-2  border-fuchsia-800 rounded-tl-2xl rounded-br-2xl"
            >
              <p>HTML</p>
            </div>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              // data-aos-delay="50"
              data-aos-duration="500"
              data-aos-once="false"
              data-aos-easing="ease-in-out"
              className="flex justify-center items-center h-[8rem] w-[10rem]  tabs text-fuchsia-600 shadow-xl border-2  border-fuchsia-800 rounded-tl-2xl rounded-br-2xl"
            >
              <p>CSS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
