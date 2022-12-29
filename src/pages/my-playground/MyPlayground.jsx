import Layout from "../../components/Layout";
import WorksCard from "../../components/cards/WorksCard";

import { reactCodesandboxImg, reactBootcampImg } from "../../assets";

//----------------------------------------------------------

const MyPlayground = () => {
  return (
    <Layout>
      <div className="font-outfit text-whisper-white">
        <h1 className="font-bold text-4xl lg:w-7/12">
          I've collected everything I've made, from simple study projects to
          intricate ones.
        </h1>
        <p className="text-zinc-400 text-xl lg:w-7/12 pt-4">
          This is me appreciating all of the projects I've created from various
          tutorials and online courses in order to improve my skills. I am
          hoping to include real projects soon.
        </p>
        <div className="pt-16 flex flex-1 flex-col">
          <h3 className="font-semibold text-xl pb-5">React Bootcamp</h3>
          <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
            <WorksCard
              workId="react-in-codesandbox"
              workImg={reactCodesandboxImg}
              workTitle="React Bootcamp exercise in Codesandbox"
              workDescription="These are react bootcamp exercises I did in CodeSandbox. I think, CodeSandbox is an amazing browser-based tool to practice your coding skills."
            />
            <WorksCard
              workId="react-bootcamp-projects"
              workImg={reactBootcampImg}
              workTitle="React Bootcamp course projects"
              workDescription="These are react bootcamp course projects. Each projects have its own github repo and deployed on gh-pages."
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPlayground;
