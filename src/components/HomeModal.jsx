import { MdOutlineClose } from "react-icons/md";

//----------------------------------------------------------

const HomeModal = ({ handleClose }) => {
  return (
    <div className="flex absolute inset-0 justify-center items-center h-full font-outfit text-bunker-gray-800 transition-all duration-300 ease-in-out delay-200">
      <div className="flex flex-col justify-center items-start sm:items-end relative w-full md:w-9/12 lg:w-7/12 xl:w-5/12 mx-5 px-6 pt-6 pb-16 bg-white rounded-xl z-[100] bg-smiley-3d bg-cover bg-right md:bg-left">
        <MdOutlineClose
          className="w-7 h-7 cursor-pointer"
          onClick={handleClose}
        />
        <div className="w-5/6 md:w-3/6 pb-28 lg:pb-10">
          <h1 className="text-3xl font-bold text-left sm:text-right pt-3">
            Welcome to my personal website
          </h1>
          <p className="text-left sm:text-right pt-3 pb-10">
            Thank you for visiting!
            <br />
            Please note that my homepage is still under development, so it is
            empty for now. Feel free to browse other pages.
          </p>
        </div>
        <a
          href="https://www.freepik.com/free-photo/world-smile-day-emojis-arrangement_16138147.htm#page=2&query=smile&position=31&from_view=keyword"
          aria-label="freepik"
          target="_blank"
          rel="noreferrer noopener"
          className="absolute bottom-3 right-32 lg:right-16 text-xs"
        >
          Image by Freepik
        </a>
      </div>
      <div className="absolute inset-0 bg-bunker-gray-900 bg-opacity-60 z-40" />
    </div>
  );
};

export default HomeModal;
