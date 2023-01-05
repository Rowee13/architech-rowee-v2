import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import HomeModal from "../components/HomeModal";
import { links } from "../constants";

//----------------------------------------------------------

const NavLinks = ({ handleClick }) => (
  <nav className="flex flex-col md:flex-row flex-wrap justify-center items-center mt-8 w-full px-2 lg:px-32 gap-6">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={({ isActive }) => {
          return (
            "flex flex-col justify-center items-center font-outfit text-2xl md:text-xl text-center w-full max-w-xs h-40 px-6 rounded-lg border border-bunker-gray-500 bg-bunker-gray-500 hover:border-riptide-accent hover:border hover:shadow-card-shadow hover:transition-all hover:ease-in hover:duration-200 " +
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

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setModalIsOpen(true);
    }, 2000);
  }, []);

  useDocumentTitle("ArchitechRowee");

  return (
    <div
      className="h-full relative xl:h-screen overflow-hidden font-outfit"
      style={{ backgroundColor: "#25292D" }}
    >
      {modalIsOpen && (
        <HomeModal handleClose={() => setModalIsOpen(!modalIsOpen)} />
      )}
      <Header />
      <main className="flex flex-col items-center py-40 px-2 h-full lg:h-screen overflow-hidden">
        <h1 className="text-5xl sm:text-6xl font-extrabold pb-3 text-transparent bg-clip-text bg-gradient-to-r from-riptide-accent to-riptide-bright">
          Welcome!
        </h1>
        <p className="text-zinc-100 text-center">
          There's nothing here on this page yet. Feel free to browse other
          pages.😊
        </p>
        <NavLinks />
      </main>
    </div>
  );
};

export default Home;
