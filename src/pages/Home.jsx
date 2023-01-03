import { useState } from "react";

import useDocumentTitle from "../hooks/useDocumentTitle";
import Header from "../components/Header";
import HomeModal from "../components/HomeModal";

//----------------------------------------------------------

const Home = () => {
  const [modalIsOpen, setModalIsOpen] = useState(true);

  useDocumentTitle("ArchitechRowee");

  return (
    <div className="h-full md:h-screen overflow-hidden">
      {modalIsOpen && (
        <HomeModal handleClose={() => setModalIsOpen(!modalIsOpen)} />
      )}
      <Header />
      <main className="h-screen overflow-hidden"></main>
    </div>
  );
};

export default Home;
