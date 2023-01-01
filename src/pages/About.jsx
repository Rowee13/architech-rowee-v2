import useDocumentTitle from "../hooks/useDocumentTitle";
import Tooltip from "../components/ui/Tooltip";
import SkillRating from "../components/ui/SkillRating";
import Layout from "../components/Layout";
import {
  htmlLogo,
  cssLogo,
  jsLogo,
  reactLogo,
  tsLogo,
  reduxLogo,
  threejsLogo,
  sassLogo,
  tailwindLogo,
  muiLogo,
  nodeLogo,
  pythonLogo,
  djangoLogo,
  firebaseLogo,
  mongodbLogo,
  figmaLogo,
  affdesignerLogo,
  affphotoLogo,
} from "../assets";

//----------------------------------------------------------

const About = () => {
  useDocumentTitle("About Me | ArchitechRowee");

  return (
    <Layout>
      <div className="flex flex-col xl:flex-row">
        <div className="flex flex-col flex-grow text-zinc-400 w-full xl:w-5/12 xl:pr-20">
          <h1 className="font-oswald text-whisper-white text-4xl font-bold pb-2 md:text-5xl">
            Hello! I am{" "}
            <strong className="bg-clip-text text-transparent bg-gradient-to-r from-riptide-accent to-riptide-bright uppercase">
              Rowee
            </strong>
          </h1>
          <h4 className="text-xl pb-8">Welcome to my personal website</h4>
          <p className="font-lato pb-4">Here’s a short story about me...</p>
          <p className="font-lato text-justify pb-2">
            Before the COVID-19 pandemic in 2019, I had some business ideas that
            piqued my interest in the tech industry. The shift in my interest
            started with exploring UX/UI design to initially have a clear image
            of my idea. Then I explore no-code tools using WordPress with
            Elementor and Webflow. Eventually, in January 2021, I decided to
            bring it to the next level to achieve my goal, and that's why I
            learned programming. While working as a part-time instructor in
            architecture, I am teaching myself about software development and
            how cloud architecture works.
          </p>
          <p className="font-lato text-justify pb-2">
            Now, I am on the journey of pursuing software development in the
            hopes of still building my ideas in 2018. I built this personal
            website to showcase my skills and also to serve as my online
            playground. 😁
          </p>
          <p className="font-lato text-justify pb-2">
            My focus right now is improving front-end development using React
            and React Native and the use of frameworks for styling like SASS,
            styled-components, and TailwindCSS. On the side, I am also learning
            Python and ThreeJS.
          </p>
          <p className="font-lato text-justify pb-2">
            Most of my time in the first year of learning programming was spent
            on understanding software architecture and some industry standards.
            Because of my own ideas, I wanted to figure out and understand how
            complex or enterprise-level apps are structured. Because of that, I
            was able to explore AWS products, Firebase and Google Cloud, and the
            concept of microservice architecture. Now that I think I have a
            clear understanding of the basics of software development and
            software architecture, I am going back to focus on and improve my
            knowledge in front-end development. I am deeply fascinated with what
            we can do with technology, and I want to dig deeper to learn more. I
            built this website not just to serve as a portfolio but also to
            track every progress I have made since the day I decided to learn
            programming.
          </p>
        </div>

        <div className="flex flex-col flex-shrink text-whisper-white w-full xl:w-5/12 pt-16 xl:pt-0">
          <h1 className="font-oswald text-3xl uppercase font-semibold pb-5">
            Tech Stack
          </h1>
          <h4 className="font-lato font-semibold text-zinc-400 pb-2">
            Frontend
          </h4>
          <div>
            <div className="flex flex-row flex-wrap gap-4 items-center pb-2">
              <Tooltip tooltipContent={<SkillRating value="6" tech="HTML" />}>
                <img
                  src={htmlLogo}
                  alt="html"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip tooltipContent={<SkillRating value="6" tech="CSS" />}>
                <img
                  src={cssLogo}
                  alt="css"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="6" tech="Javascript" />}
              >
                <img
                  src={jsLogo}
                  alt="javascript"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="6" tech="ReactJS" />}
              >
                <img
                  src={reactLogo}
                  alt="react"
                  className="w-[54px] h-[54px] grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="3" tech="Typescript" />}
              >
                <img
                  src={tsLogo}
                  alt="typescript"
                  className="w-[50px] h-[50px] grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip tooltipContent={<SkillRating value="3" tech="Redux" />}>
                <img
                  src={reduxLogo}
                  alt="redux"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="2" tech="ThreeJS" />}
              >
                <img
                  src={threejsLogo}
                  alt="threejs"
                  className="w-[52px] h-[52px] grayscale hover:grayscale-0"
                />
              </Tooltip>
            </div>
            <div className="flex flex-row flex-wrap gap-4 items-center pt-2">
              <Tooltip tooltipContent={<SkillRating value="4" tech="SASS" />}>
                <img
                  src={sassLogo}
                  alt="sass"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="6" tech="TailwindCSS" />}
              >
                <img
                  src={tailwindLogo}
                  alt="tailwind"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip tooltipContent={<SkillRating value="6" tech="MUI" />}>
                <img
                  src={muiLogo}
                  alt="mui"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
            </div>
          </div>
          <h4 className="font-lato font-semibold text-zinc-400 pb-2 pt-5">
            Backend
          </h4>
          <div>
            <div className="flex flex-row flex-wrap gap-4 items-center pb-2">
              <Tooltip tooltipContent={<SkillRating value="3" tech="NodeJS" />}>
                <img
                  src={nodeLogo}
                  alt="nodeJS"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip tooltipContent={<SkillRating value="4" tech="Python" />}>
                <img
                  src={pythonLogo}
                  alt="python"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip tooltipContent={<SkillRating value="3" tech="Django" />}>
                <img
                  src={djangoLogo}
                  alt="django"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="4" tech="Firebase" />}
              >
                <img
                  src={firebaseLogo}
                  alt="firebase"
                  className="w-10 grayscale hover:grayscale-0"
                />
              </Tooltip>
            </div>
          </div>
          <h4 className="font-lato font-semibold text-zinc-400 pb-2 pt-5">
            Database
          </h4>
          <div>
            <div className="flex flex-row flex-wrap gap-4 items-center pb-2">
              <Tooltip
                tooltipContent={<SkillRating value="4" tech="MongoDB" />}
              >
                <img
                  src={mongodbLogo}
                  alt="mongodb"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
            </div>
          </div>
          <h4 className="font-lato font-semibold text-zinc-400 pb-2 pt-5">
            Design
          </h4>
          <div>
            <div className="flex flex-row flex-wrap gap-4 items-center pb-2 z-0">
              <Tooltip tooltipContent={<SkillRating value="7" tech="Figma" />}>
                <img
                  src={figmaLogo}
                  alt="figma"
                  className="w-[50px] h-[50px] grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={
                  <SkillRating value="5" tech="Affinity Designer" />
                }
              >
                <img
                  src={affdesignerLogo}
                  alt="affinity-designer"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
              <Tooltip
                tooltipContent={<SkillRating value="5" tech="Affinity Photo" />}
              >
                <img
                  src={affphotoLogo}
                  alt="affinity-V2"
                  className="w-14 h-14 grayscale hover:grayscale-0"
                />
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
