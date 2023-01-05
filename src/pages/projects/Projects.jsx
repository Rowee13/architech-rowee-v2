import { Link } from "react-router-dom";

import Layout from "../../components/Layout";

//----------------------------------------------------------

const Projects = () => {
  return (
    <Layout>
      <div className="font-outfit text-whisper-white h-screen">
        <header className="pb-16 md:w-10/12 xl:w-7/12 xl:pr-20">
          <h1 className="font-bold text-3xl lg:text-4xl">
            Things I've made trying to make sense of my existence in the
            universe.
          </h1>
          <p className="text-zinc-400 pt-5">
            A space separated from my playground where I can showcase real
            projects.
          </p>
        </header>
        <div className="border-b border-zinc-500 w-full h-10" />
        <main className="flex flex-col items-center pt-40">
          <h1 className="text-xl">
            There's nothing published yet. For now, please go to my playground.
            Click{" "}
            <Link to="/my-playground" className="text-riptide-accent underline">
              here.
            </Link>{" "}
          </h1>
        </main>
      </div>
    </Layout>
  );
};

export default Projects;
