import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";
import { ImProfile } from "react-icons/im";
import { MdClose } from "react-icons/md";

import { links } from "../constants";

//----------------------------------------------------------

const Logo = () => (
  <div className="flex flex-col w-full md:w-auto justify-center items-center border-y border-y-whisper-white">
    <Link
      to="/"
      className="flex text-2xl md:text-3xl font-oswald font-semibold pt-3.5 text-whisper-white hover:text-transparent bg-clip-text hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:duration-[400ms]"
    >
      ARCHITECHROWEE
    </Link>
    <div className="flex flex-row pb-3.5 pt-1">
      <h3 className="text-whisper-white text-md md:text-xl font-petitformal font-medium">
        Architecture
      </h3>
      <h3 className="text-whisper-white text-md md:text-xl font-poppins font-semibold">
        + Tech
      </h3>
    </div>
  </div>
);

const NavLinks = ({ handleClick }) => (
  <nav className="mt-8">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }) => {
          return (
            "flex flex-col justify-center items-start px-6 my-2 font-shortstack w-full h-11 text-sm md:text-base rounded hover:border-riptide-accent hover:border hover:shadow-nav-shadow hover:bg-riptide-accent hover:bg-opacity-50 hover:transition-all hover:ease-in hover:duration-200 " +
            (isActive
              ? "bg-gradient-to-r from-riptide-accent to-riptide-bright text-bunker-gray-800"
              : "bg-bunker-gray-700 text-whisper-white")
          );
        }}
        onClick={() => handleClick && handleClick()}
      >
        {item.name}
      </NavLink>
    ))}
  </nav>
);

console.log(<NavLinks />);

const Header = () => {
  const [toggleNavMenu, setToggleNavMenu] = useState(false);

  const handleToggleNavMenu = (e) => {
    e.preventDefault();
    setToggleNavMenu(!toggleNavMenu);
  };

  return (
    <header>
      <div className="flex flex-row items-center justify-between relative top-0 mx-2 lg:mx-16 xl:mx-28 mt-5 h-16 md:h-24 bg-bunker-gray-900 bg-opacity-60 rounded-xl border border-bunker-gray-400 z-30">
        <div
          className={`flex flex-row items-center text-whisper-white ${
            toggleNavMenu ? "opacity-0" : "opacity-100"
          }`}
        >
          <button onClick={handleToggleNavMenu}>
            <IoMenu className="w-5 h-5 md:w-7 md:h-7 m-5 lg:m-8 text-riptide-accent" />
          </button>
          <Link
            to="/"
            className="font-oswald font-bold uppercase text-base md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-riptide-accent to-riptide-bright"
          >
            ArchitechRowee
          </Link>
        </div>
        <a
          href="https://architech-rowee.notion.site/architech-rowee/Rowee-Andrew-Apor-84bffad3172449bfbf4e957cdf03fcda"
          aria-label="resume"
          target="_blank"
          rel="noreferrer noopener"
          className="tooltip tooltip-left tooltip-accent flex items-center justify-center rounded-full w-6 h-6 md:w-10 md:h-10 m-5 lg:m-8 border border-bunker-gray-100 cursor-pointer hover:bg-gradient-to-r from-riptide-accent to-riptide-bright"
          data-tip="see resume"
        >
          <ImProfile className="w-4 h-4 md:w-5 md:h-5 text-bunker-gray-100" />
        </a>
      </div>
      {toggleNavMenu && (
        <>
          <div className="absolute w-64 xs:w-72 sm:w-80 bg-bunker-gray-900 bg-opacity-80 border border-riptide-accent shadow-card-shadow top-24 md:top-32 left-2 lg:left-16 xl:left-28 p-8 md:p-10 rounded-xl z-50">
            <div className="flex justify-center items-center w-8 h-8 mb-5 border border-bunker-gray-900 rounded-md text-zinc-100 hover:text-riptide-accent hover:border-riptide-accent cursor-pointer">
              <MdClose
                className="w-5 h-5"
                onClick={() => setToggleNavMenu(!toggleNavMenu)}
              />
            </div>
            <Logo />
            <NavLinks />
          </div>
          <div
            onClick={() => setToggleNavMenu(!toggleNavMenu)}
            className="absolute top-0 w-full h-screen bg-black bg-opacity-40 z-40"
          />
        </>
      )}
    </header>
  );
};

export default Header;
