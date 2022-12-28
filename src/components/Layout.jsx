import Header from "./Header";
import Footer from "./Footer";

//----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col justify-between min-h-full bg-bunker-gray-900 border border-bunker-gray-500 lg:mx-16 xl:mx-28 mt-20 px-5 lg:px-10 pt-20 rounded-t-3xl">
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
