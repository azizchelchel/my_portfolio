import { Card } from "flowbite-react";
import { RxGithubLogo } from "react-icons/rx";
import DigtalTrader from "../assets/digital-trader.png";
import docplanner from "../assets/docplanner.png";
import mameteo from "../assets/mameteo.png";
import ShopingCart from "../assets/shoping-cart.png";
const Projects = () => {
  return (
    <div id="Projects" className="h-full p-5">
      <div className="px-2 lg:px-40 py-2 text-start gap-2 lg:text-start flex flex-col justify-between items-center lg:items-start  lg:gap-16 ">
        <h1
          data-aos="fade-left"
          data-aos-offset="200"
          // data-aos-delay="50"
          // data-aos-duration="1000"
          data-aos-once="false"
          data-aos-easing="ease-in-out"
          className="  uppercase flex items-start text-[52px] text-white font-semibold mb-1 leading-normal"
        >
          PROJECTS
        </h1>
        <p className="text-white">
          The following projects highlight my skills and experience through
          concrete examples of my work. Each project is briefly described with
          links to code repositories or live demos. This reflects my ability to
          solve complex problems, work with different technologies and manage
          projects effectively.
        </p>
        <div className="grid grid-cols-1 mx-auto gap-4 sm:grid-cols-2 xl:grid-cols-3  ">
          <div className="tabs  rounded-lg">
            <RxGithubLogo className="absolute top-0 z-50 rounded-full" />
            <Card
              className="max-w-sm h-full"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={DigtalTrader}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="tabs  rounded-lg ">
            <Card
              className="max-w-sm  h-full"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={mameteo}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="tabs  rounded-lg">
            <Card
              className="max-w-sm h-full"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={docplanner}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
          <div className="tabs  rounded-lg">
            <Card
              className="max-w-sm h-full"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={ShopingCart}
            >
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
