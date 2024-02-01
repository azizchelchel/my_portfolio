import expressjs from "../assets/expressjs.png";
import mongodb from "../assets/mongodb.png";
import mysql from "../assets/mysql.png";
import nextjs from "../assets/nextjs.png";
import nodejs from "../assets/nodejs.png";
import reactjs from "../assets/react.svg";

const WorkStack = () => {
  return (
    <div className="w-full px-10 h-auto flex justify-around items-center">
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col justify-center items-center py-5"
      >
        <img src={reactjs} className="w-[40px] h-[40px]" alt="img" />
        <div>
          <p className="text-white">React.js</p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col w-10 h-10 justify-center items-center py-5"
      >
        <img
          src={nextjs}
          className="w-[40px] h-[40px] rounded-full"
          alt="img"
        />
        <div>
          <p className="text-white">Next.js</p>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col w-10 h-10 justify-center items-center py-5"
      >
        <img src={nodejs} className="w-[40px] h-[40px] rounded-lg" alt="img" />
        <div>
          <p className="text-white">Node.js</p>
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col w-10 h-10 justify-center items-center py-5"
      >
        <img
          src={expressjs}
          className="w-[40px] h-[40px] rounded-lg"
          alt="img"
        />
        <div>
          <p className="text-white">Express.js</p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col justify-center w-10 h-10 items-center py-5"
      >
        <div className="border border-slate-600 w-[40px] h-[40px] rounded-lg">
          <img src={mongodb} className="w-[40px] h-[40px]" alt="img" />
        </div>
        <div>
          <p className="text-white">MongDb</p>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-once="false"
        data-aos-easing="ease-in-out"
        className="flex flex-col  w-10 h-10 justify-center items-center py-5 "
      >
        <img src={mysql} className="rounded-full" alt="img" />
        <div>
          <p className="text-white">MySql</p>
        </div>
      </div>
    </div>
  );
};

export default WorkStack;
