import Header from "./Header";
import Footer from "./Footer";

//----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="flex flex-col justify-between h-full bg-bunker-gray-900 bg-no-repeat bg-opacity-60 border border-bunker-gray-400 lg:mx-16 xl:mx-28 mt-20 px-5 md:px7 xl:px-10 pt-20 rounded-t-3xl">
        {children}
        <Footer />
      </main>
    </>
  );
};

export default Layout;
