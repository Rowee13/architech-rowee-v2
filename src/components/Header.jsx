import { IoMenu } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";

//----------------------------------------------------------

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between sticky top-0 mx-2 lg:mx-16 xl:mx-28 mt-5 h-16 md:h-24 bg-bunker-gray-900 rounded-xl border border-bunker-gray-600">
        <div className="flex flex-row items-center text-whisper-white">
          <IoMenu className="w-5 h-5 md:w-7 md:h-7 m-5 lg:m-8" />
          <h1 className="font-oswald font-bold uppercase text-base md:text-2xl">
            Architech Rowee
          </h1>
        </div>
        <div className="flex items-center justify-center rounded-full w-6 h-6 md:w-9 md:h-9 m-5 lg:m-8 bg-bunker-gray-400 cursor-pointer hover:bg-bunker-gray-100">
          <RiMoonClearFill className="w-4 h-4 md:w-5 md:h-5 text-bunker-gray-800" />
        </div>
      </div>
      <div className="absolute"></div>
    </>
  );
};

export default Header;
