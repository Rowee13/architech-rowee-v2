import Header from "./Header";

//----------------------------------------------------------

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex bg-bunker-gray-900 h-screen mx-28 mt-20 rounded-t-3xl justify-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
