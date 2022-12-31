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
      </div>
    </Layout>
  );
};

export default Projects;
