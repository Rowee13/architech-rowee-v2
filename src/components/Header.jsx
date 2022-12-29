import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";

import { links } from "../constants";

//----------------------------------------------------------

const Logo = () => (
  <div className="flex flex-col w-full md:w-auto justify-center items-center border-y border-y-whisper-white">
    <Link
      to="/"
      className="flex text-whisper-white hover:text-riptide-accent text-3xl font-oswald font-semibold pt-3.5"
    >
      ARCHITECHROWEE
    </Link>
    <div className="flex flex-row pb-3.5 pt-1">
      <h3 className="text-whisper-white text-xl font-petitformal font-medium">
        Architecture
      </h3>
      <h3 className="text-whisper-white text-xl font-poppins font-semibold">
        + Tech
      </h3>
    </div>
  </div>
);

const NavLinks = ({ handleClick }) => (
  <nav className="my-9">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }) => {
          return (
            "flex flex-col justify-center items-start px-6 my-2 font-shortstack w-full h-11 text-base  hover:border-riptide-accent hover:border hover:shadow-nav-shadow " +
            (isActive
              ? "bg-riptide-accent text-bunker-gray-800"
              : "bg-bunker-gray-700 text-whisper-white hover:bg-bunker-gray-800")
          );
        }}
        onClick={() => handleClick && handleClick()}
      >
        {item.name}
      </NavLink>
    ))}
  </nav>
);

const Header = () => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  const handleToggleNavMenu = (e) => {
    e.preventDefault();
    setToggleNavMenu(!toggleNavMenu);
  };

  return (
    <>
      <div className="flex flex-row items-center justify-between relativetop-0 mx-2 lg:mx-16 xl:mx-28 mt-5 h-16 md:h-24 bg-bunker-gray-900 rounded-xl border border-bunker-gray-500 z-30">
        <div className="flex flex-row items-center text-whisper-white">
          <button onClick={handleToggleNavMenu}>
            <IoMenu className="w-5 h-5 md:w-7 md:h-7 m-5 lg:m-8" />
          </button>
          <Link
            to="/"
            className="font-oswald font-bold uppercase text-base md:text-2xl"
          >
            Architech Rowee
          </Link>
        </div>
        <div className="flex items-center justify-center rounded-full w-6 h-6 md:w-9 md:h-9 m-5 lg:m-8 bg-bunker-gray-400 cursor-pointer hover:bg-bunker-gray-100">
          <RiMoonClearFill className="w-4 h-4 md:w-5 md:h-5 text-bunker-gray-800" />
        </div>
      </div>
      {toggleNavMenu && (
        <>
          <div className="absolute w-80 bg-bunker-gray-900 top-24 md:top-32 left-2 lg:left-16 xl:left-28 p-10 rounded-xl z-50">
            <Logo />
            <NavLinks />
          </div>
          <div
            onClick={(e) => setToggleNavMenu(!toggleNavMenu)}
            className="absolute top-0 w-full h-full bg-bunker-gray-800 bg-opacity-70 blur-3xl z-40"
          />
        </>
      )}
    </>
  );
};

export default Header;
