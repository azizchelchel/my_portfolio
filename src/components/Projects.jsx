import DigitalTrader from "../assets/digital-trader.png";
import docplanner from "../assets/docplanner.png";
import mameteo from "../assets/mameteo.png";
import ShopingCart from "../assets/shoping-cart.png";

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
            <a
              href="https://shopping-cart-zeta-drab.vercel.app/"
              target="blank"
            >
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                className="flex justify-center items-center h-[8rem] w-[12rem]  text-fuchsia-600 shadow-3xl border-2  border-fuchsia-800   cards  
               rounded-xl "
              >
                <img
                  src={ShopingCart}
                  alt="Digital-Trader"
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </a>
            <a href="https://digital-trader-delta.vercel.app/" target="blank">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                className="flex justify-center items-center h-[8rem] w-[12rem]  text-fuchsia-600 shadow-3xl border-2  border-fuchsia-800   cards  
                rounded-xl"
              >
                <img
                  src={DigitalTrader}
                  alt="Digital-Trader"
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </a>
          </div>
          <div className="flex flex-col gap-10 p-5 lg:flex-row lg:justify-evenly">
            <a href="https://docplanner-clone-2.vercel.app/" target="blank">
              <div
                data-aos="fade-right"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                className="flex justify-center items-center h-[8rem] w-[12rem]  text-fuchsia-600 shadow-3xl border-2  border-fuchsia-800   cards  
              rounded-xl "
              >
                <img
                  src={docplanner}
                  alt="mameteo"
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </a>
            <a href="https://meteome.vercel.app/">
              <div
                data-aos="fade-left"
                data-aos-offset="200"
                // data-aos-delay="50"
                data-aos-duration="500"
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                className="flex justify-center items-center h-[8rem] w-[12rem]  text-fuchsia-600 shadow-3xl border-2  border-fuchsia-800   cards  
               rounded-xl "
              >
                <img
                  src={mameteo}
                  alt="mameteo"
                  className="h-full w-full rounded-2xl"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
