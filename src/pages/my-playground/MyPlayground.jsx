import useDocumentTitle from "../../hooks/useDocumentTitle";
import Layout from "../../components/Layout";
import PlaygroundCard from "../../components/cards/PlaygroundCard";
import PlaygroundACard from "../../components/cards/PlaygroundACard";

import {
  reactCodesandboxImg,
  reactBootcampImg,
  femChallengeImg,
} from "../../assets";

//----------------------------------------------------------

const MyPlayground = () => {
  useDocumentTitle("My Playground | ArchitechRowee");

  return (
    <Layout>
      <div className="font-outfit text-whisper-white">
        <header className="pb-16 md:w-10/12 lg:w-7/12">
          <h1 className="font-bold text-3xl lg:text-4xl">
            I've collected everything I've made, from simple study projects to
            intricate ones.
          </h1>
          <p className="text-zinc-400 text-lg lg:text-xl pt-4 md:pr-12 lg:pr-0">
            This is me appreciating all of the projects I've created from
            various tutorials and online courses in order to improve my skills.
            I am hoping to include real projects soon.
          </p>
        </header>
        <div className="border-b border-zinc-500 w-full h-10" />
        <div className="pt-10 flex flex-1 flex-col">
          <div>
            <h3 className="font-semibold text-2xl pb-5">React Bootcamp</h3>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
              <PlaygroundCard
                workId="react-in-codesandbox"
                workImg={reactCodesandboxImg}
                workTitle="React Bootcamp exercise in Codesandbox"
                workDescription="These are react bootcamp exercises I did in CodeSandbox. I think, CodeSandbox is an amazing browser-based tool to practice your coding skills."
              />
              <PlaygroundCard
                workId="react-bootcamp-projects"
                workImg={reactBootcampImg}
                workTitle="React Bootcamp course projects"
                workDescription="These are react bootcamp course projects. Each projects have its own github repo and deployed on gh-pages."
              />
            </div>
          </div>
          <div className="pt-14">
            <h3 className="font-semibold text-2xl pb-5">
              Front-end Mentor Challenge
            </h3>
            <div className="flex flex-col md:flex-row gap-2 lg:gap-4">
              <PlaygroundACard
                link="https://fem-solutions-byrowee.vercel.app/"
                workImg={femChallengeImg}
                workTitle="FEM Challenge Solutions"
                workDescription="This is a separate website for all of my solutions to the frontend mentor challenge. By clicking the view button, you'll be redirected to a different website, but you can come back here if you wish."
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyPlayground;
