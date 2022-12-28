import Header from "./Header";
import Footer from "./Footer";

//----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between bg-bunker-gray-900 min-h-screen mx-28 mt-20 px-10 pt-20 rounded-t-3xl">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
