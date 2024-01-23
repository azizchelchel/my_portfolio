import myavatar from "../assets/itsme.png";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="bg-slate-800  py-16 flex flex-col gap-8  md:flex-row md:px-20 ">
      <div className="flex flex-col gap-4">
        <img src={myavatar} width={70} height={70} alt="my avatar" />
        <div className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
          tempora vitae temporibus, est, nulla quam veritatis quod aspernatur
          dolorem
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-fuchsia-600">SERVICES</h2>
        <ul className="text-white">
          <li>web dev</li>
          <li>web dev</li>
          <li>web dev</li>
          <li>web dev</li>
        </ul>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-fuchsia-600">CONTACT</h2>
        <ul className="text-white">
          <li>
            <p>Email:chellalaziz31@gmail.com</p>
          </li>
          <li>
            <p>Phone: (+213) 541 413 847</p>
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2">
        <h2 className="text-fuchsia-600">FOLLOW ME</h2>
        <div className="flex gap-2 ">
          <a href="https://www.github.com/azizchelchel" target="blank">
            <AiFillGithub className="text-[14px]  text-white" />
          </a>
          <a
            href="https://www.linkedin.com/in/aziz-chellal-416993230"
            target="blank"
          >
            <FaLinkedinIn className="text-[14px] text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
