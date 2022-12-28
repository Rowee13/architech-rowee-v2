import { Link } from "react-router-dom";

//----------------------------------------------------------

const WorksCard = ({ workId, workImg, workTitle, workDescription }) => {
  return (
    <div className="flex flex-col w-4/12 rounded-xl bg-bunker-gray-800">
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={workImg}
          alt={workId}
          className="object-cover object-center"
        />
      </div>
      <div className="pt-5 px-8 h-36">
        <h3 className="font-extrabold text-xl pb-3 text-whisper-white truncate">
          {workTitle}
        </h3>
        <p className="text-zinc-400 text-sm text-justify line-clamp-3 pb-4 h-16">
          {workDescription}
        </p>
      </div>
      <Link
        to={workId}
        className="text-center py-3 m-8 rounded-xl uppercase font-black bg-bunker-gray-800 border border-riptide-accent hover:bg-riptide-accent hover:text-bunker-gray-900"
      >
        view
      </Link>
    </div>
  );
};

export default WorksCard;
