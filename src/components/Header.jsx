import { IoMenu } from "react-icons/io5";
import { RiMoonClearFill } from "react-icons/ri";

//----------------------------------------------------------

const Header = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between sticky top-0 mx-28 mt-5 h-24 bg-bunker-gray-900 rounded-xl border border-bunker-gray-600">
        <div className="flex flex-row items-center text-whisper-white">
          <IoMenu className="w-7 h-7 m-8" />
          <h1 className="font-oswald font-bold uppercase text-2xl">
            Architech Rowee
          </h1>
        </div>
        <div className="flex items-center justify-center rounded-full w-9 h-9 m-8 bg-bunker-gray-400 cursor-pointer hover:bg-bunker-gray-100">
          <RiMoonClearFill className="w-5 h-5 text-bunker-gray-800" />
        </div>
      </div>
      <div className="absolute"></div>
    </>
  );
};

export default Header;
