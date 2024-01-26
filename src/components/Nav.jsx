import { useState } from "react";
import { Link } from "react-scroll";
import { FaTimes } from "react-icons/fa";
import { CiMenuFries } from "react-icons/ci";
import myavatar from "../assets/itsme.png";

const Nav = () => {
  const handleClick = () => {
    setClick(!click);
  };
  const [click, setClick] = useState(false);
  const content = (
    <>
      <div className="lg:hidden block  top-16 w-full left-0 right-0 bg-slate-900">
        <ul className="text-center text-xl p-20">
          <Link spy={true} smooth={true} to="Home">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hoveeer:rounded">
              Home
            </li>
          </Link>
          <Link spy={true} smooth={true} to="About">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hoveeer:rounded">
              About
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Services">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hoveeer:rounded">
              Services
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Projects">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hoveeer:rounded">
              Projects
            </li>
          </Link>
          <Link spy={true} smooth={true} to="Contact">
            <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hoveeer:rounded">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
  return (
    <nav>
      <div className="h-10vh flex justify-between z-50 text-white lg:py-5 px-20 py-4 border-b border-slate-800 ">
        <div className="flex items-center flex-1">
          <span className="text-3xl font-bold">
            <a spy={true} smooth={true} to="Banner">
              <img
                src={myavatar}
                alt="my avatar"
                className="rounded-full"
                width={60}
                height={60}
              />
            </a>
          </span>
        </div>
        <div className=" md:flex  lg:flex lg:flex-1 items-center justify-end font-normal hidden">
          <div className="flex-10">
            <ul className="flex gap-8 mr-16 text-[18px]">
              <Link spy={true} smooth={true} to="Banner">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:bordeer-fuchsia-600 cursor-pointer">
                  Home
                </li>
              </Link>
              <Link spy={true} smooth={true} to="About">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:bordeer-fuchsia-600 cursor-pointer">
                  About
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Services">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:bordeer-fuchsia-600 cursor-pointer">
                  Services
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Projects">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:bordeer-fuchsia-600 cursor-pointer">
                  Projects
                </li>
              </Link>
              <Link spy={true} smooth={true} to="Contact">
                <li className="hover:text-fuchsia-600 transition border-b-2 border-slate-900 hover:bordeer-fuchsia-600 cursor-pointer">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
        </div>
        <div>{click && content}</div>
        <button className="block sm:hidden trandition" onClick={handleClick}>
          {click ? <FaTimes /> : <CiMenuFries />}
        </button>
      </div>
    </nav>
  );
};

export default Nav;
