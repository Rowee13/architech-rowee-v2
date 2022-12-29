import Header from "../components/Header";
import useDocumentTitle from "../hooks/useDocumentTitle";

//----------------------------------------------------------

const Home = () => {
  useDocumentTitle("ArchitechRowee");

  return (
    <>
      <Header />
      <main className="h-screen overflow-hidden"></main>
    </>
  );
};

export default Home;
