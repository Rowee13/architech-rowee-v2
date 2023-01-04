import { Link } from "react-router-dom";

//----------------------------------------------------------

const PlaygroundCard = ({ workId, workImg, workTitle, workDescription }) => {
  return (
    <div className="flex flex-col w-full md:w-6/12 lg:w-4/12 p-3 xs:p-5 rounded-xl bg-bunker-gray-800 border border-bunker-gray-400 bg-opacity-60 hover:border-riptide-accent transition-all ease-in-out duration-200">
      <div className="overflow-hidden rounded-xl">
        <img
          src={workImg}
          alt={workId}
          className="object-cover object-center"
        />
      </div>
      <div className="pt-5 h-36">
        <h3 className="font-extrabold text-xl pb-3 text-whisper-white truncate">
          {workTitle}
        </h3>
        <p className="text-zinc-400 text-sm line-clamp-3 pb-4 h-20">
          {workDescription}
        </p>
      </div>
      <Link
        to={workId}
        className="text-center text-riptide-accent w-full xs:w-5/12 py-2 xs:py-3 mt-10 mb-4 rounded-lg uppercase font-black bg-bunker-gray-800 border border-riptide-accent hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-900"
      >
        view
      </Link>
    </div>
  );
};

export default PlaygroundCard;
