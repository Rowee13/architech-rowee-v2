import { Link } from "react-router-dom";
import { IoArrowBackOutline } from "react-icons/io5";
import { FaRegLightbulb, FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import Layout from "../../../components/Layout";
import useDocumentTitle from "../../../hooks/useDocumentTitle";
import {
  pokedexDemo,
  hangmanDemo,
  lightsOutDemo,
  todolistDemo,
  yahtzeeDemo,
  dadJokesDemo,
} from "../../../assets";

//----------------------------------------------------------

const ReactBootcampProjects = () => {
  useDocumentTitle("React Bootcamp | ArchitechRowee");

  return (
    <Layout>
      <article className="font-outfit text-whisper-white">
        <div className="flex flex-col justify-end text-justify pb-8 lg:pb-10">
          <h1 className="font-oswald uppercase font-bold text-3xl lg:text-4xl">
            Learning react
          </h1>
          <p className="lg:text-xl text-zinc-400 pt-2">
            These are React Bootcamp course projects in Udemy. <br />
            Course Title: The Modern React Bootcamp (Hooks, Context, NextJS,
            Router) by Colt Steele
          </p>
        </div>

        <div className="h-full pt-7 text-md text-whisper-white">
          <Link to="/my-playground" className="btn btn-outline mb-6">
            <IoArrowBackOutline />
            <button className="pl-3">Back</button>
          </Link>
          <div className="lg:w-4/5">
            <h1 className="font-bold text-2xl lg:text-3xl">
              React bootcamp course projects
            </h1>
            <p className="text-justify py-5 text-zinc-400">
              These are course projects from the React Online Bootcamp. Each
              project has its own GitHub repo and is deployed on gh-pages.
              Because Colt Steele's React Bootcamp course on Udemy is out of
              date, all of these projects are done as class-based components. I
              decided to keep it here in case someone wants to recreate it with
              newer methods or using react hooks in function-based components.
              All github repos are linked here, so feel free to fork them or use
              them as references to recreate using React Hooks.
            </p>
            <p className="text-zinc-400">
              These projects are arranged based on their difficulty level, if
              that's how it's arranged in the course. 😄 All the source code
              here is the result of following the course.
            </p>
            <div className="flex flex-row font-bold text-bunker-gray-800 border-l-8 border-bunker-gray-100 bg-riptide-accent opacity-80 my-8 p-3 lg:p-6 rounded-lg">
              <FaRegLightbulb className="w-6 h-6" />
              <span className="justify-start pl-5 lg:pl-3">
                Note: these projects are designed for desktop view only.
              </span>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                01. Pokedex
              </h3>
              <p className="text-justify">
                This game is simple, yet it can enhance how you create logic in
                an application. For how it works, each pokedex has its
                equivalent "base_experience" or EXP score. Every time you hit
                refresh, it generates a new pokedex for each opposing group. The
                app will automatically get the total of the EXP in each pokedex
                group. It marks in green the winning side and red on the losing
                side. And that's it—very simple, but the logic behind it will
                require a few conditional renderings and comparisons for each
                generated state.
              </p>
              <p className="pt-5 text-justify">
                For enhancements, consider adding a button to generate a new
                pokedex instead of hitting the browser's refresh button, as well
                as a score card to track the number of wins and losses for each
                pokedex group. These enhancements will undoubtedly be
                implemented after I convert this using React Hooks. 
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Practice the use of reusable components</li>
                  <li>Still pure Javascript to apply logic in an app</li>
                  <li>Use of API to generate images</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={pokedexDemo}
                  alt="pokedex-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/pokedex-game/"
                    aria-label="pokedex-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/pokedex-game"
                    aria-label="pokedex-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                02. Hangman
              </h3>
              <p className="text-justify">
                Similar to Pokedex, this game showcases a great deal of how to
                apply Javascript methods and built-in functions in a React app.
                This project provides me with additional opportunities to
                understand and learn about conditional rendering, primarily
                through the ternary operator. This is also a good project to
                practice state management in React. I haven't tried converting
                this with React Hooks yet, but it's definitely at the top of my
                list. 
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Practice the use of reusable components</li>
                  <li>Use of other Javascript methods or built-in functions</li>
                  <li>Conditional rendering using ternary operator</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={hangmanDemo}
                  alt="hangman-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/hangman-project/"
                    aria-label="hangman-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/hangman-project"
                    aria-label="hangman-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                03. Lights Out Game
              </h3>
              <p className="text-justify">
                I don't know if I was the only one, but this is the first time I
                played this game. For those who are unfamiliar with this game,
                the goal is to turn off all colored boxes, which are depicted as
                turned-on lights, hence the name "lights out" game. To do this,
                you need to click on each box. Once you click on a box, the
                click event will detect a cross shape (+) or plus, then turn off
                those boxes that are "ON" along the cross shape and turn on
                those boxes that are "OFF" . This gameplay will repeat until you
                successfully turn off all the boxes. The game itself is a bit
                tricky, and I haven't won it yet.
              </p>
              <p className="pt-4 text-justify">
                I will admit that the logic for this game is insane. I don't
                have the capacity to create this kind of logic or algorithm for
                now, which is why one key takeaway for me is the importance of
                data structure and algorithm. Of course, some people might say
                this is still a simple project, but soon, we'll definitely
                achieve that level of skill.
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Importance of problem solving skills</li>
                  <li>That I should study data structure and algorithm 😅</li>
                  <li>Conditional rendering using ternary operator</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={lightsOutDemo}
                  alt="lights-out-game-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/lights-out-game/"
                    aria-label="lights-out-game-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/lights-out-game"
                    aria-label="lights-out-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                04. Todolist app
              </h3>
              <p className="text-justify">
                The classic Todoist app—maybe I can say that since we can see a
                lot of tutorials and, of course, include this as a practice
                project. This React Bootcamp also includes a version of this app
                using React Hooks, which you can browse{" "}
                <Link
                  to="/my-playground"
                  className="font-medium underline hover:text-riptide-accent"
                >
                  here.
                </Link>
                &nbsp;I think this project is popular because there is a lot we
                can learn here. This is a simple project, yet it covers many
                topics like form input handling, deleting data from the state,
                editing the state, handling events, resetting the form after
                submission, and a lot of additional features we can add to it.
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Form input handling</li>
                  <li>Removing data from the state</li>
                  <li>Resetting the form values onSubmit</li>
                  <li>Getting a value from the state and make changes</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={todolistDemo}
                  alt="todolist-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/todo-list-project/"
                    aria-label="todolist-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/todo-list-project"
                    aria-label="todolist-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                05. Yahtzee Game
              </h3>
              <p className="text-justify">
                Like the lights-out game, this one is also new to me. The
                gameplay is a bit tricky as well. It is a strategy game, and I
                might say that it is based on luck because you need to roll a
                die. Each round, you will roll five dice, and you have the
                ability to freeze and unfreeze them if you are aiming for a
                certain dice combination. You have 13 rounds left before the
                game is over, and the total score for each category will be
                shown at the bottom of the card. It's really hard for me to
                explain the gameplay of this game, so here's a&nbsp;
                <a
                  href="https://en.wikipedia.org/wiki/Yahtzee#Yahtzee_bonuses_and_Joker_rules"
                  aria-label="wiki-reference"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="font-medium underline hover:text-riptide-accent"
                >
                  Wikipedia page
                </a>
                &nbsp;if you want to read on.
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Importance of problem solving skills</li>
                  <li>That I should study data structure and algorithm 😅</li>
                  <li>Conditional rendering using ternary operator</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={yahtzeeDemo}
                  alt="yahtzee-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/yahtzee-game/"
                    aria-label="yahtzee-game-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/yahtzee-game"
                    aria-label="yahtzee-game-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* projects start here - one div per project */}
            <div className="py-12 text-zinc-400">
              <h3 className="font-bold text-2xl pb-6 text-whisper-white">
                06. Dad Jokes app
              </h3>
              <p className="text-justify">
                This may be the last item on the list, but it is not the main
                project in the course. Despite its simple appearance, this
                project covers a wide range of features. It uses an API to fetch
                data (the jokes) and conditionally render them upon the request
                of the user. The app also tracks the votes on each joke and
                saves them locally in the user's browser. Depending on the
                number of votes, the emoji icon also changes. Of course, it also
                has some animation for a more interesting UI experience.
                Although the entire app is not yet mobile responsive, I am
                saving it for when I convert it using React hooks.
              </p>
              <div className="py-6">
                <h4 className="font-semibold text-lg pb-2">Learnings:</h4>
                <ul className="list-disc list-inside pl-3">
                  <li>Use of API to fetch data</li>
                  <li>Control the fetched data how to render it in the app</li>
                  <li>Saving states in the local storage of user's browser</li>
                </ul>
              </div>
              <div className="mockup-window border border-riptide-accent bg-bunker-gray-600">
                <img
                  src={dadJokesDemo}
                  alt="dad-jokes-demo"
                  className="w-full border-0 overflow-hidden"
                />
                <div className="flex flex-col xs:flex-row gap-2 p-6 justify-between">
                  <a
                    href="https://rowee13.github.io/dad-jokes-app/"
                    aria-label="dad-jokes-demo"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FiExternalLink className="w-4 h-4" />
                      Live demo
                    </button>
                  </a>
                  <a
                    href="https://github.com/Rowee13/dad-jokes-app"
                    aria-label="dad-jokes-github"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    <button className="btn gap-2 font-bold hover:scale-110">
                      <FaGithub className="w-4 h-4" />
                      Github repo
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="text-whisper-white font-lato py-20">
              <h3 className="text-3xl lg:text-4xl font-bold">That's it!</h3>
              <p className="text-xl font-medium pt-3 text-zinc-400">
                I hope you enjoy browsing these projects. I will update this
                page once I am done converting these projects into
                function-based components with React hooks.
              </p>
            </div>
            <Link to="/my-playground" className="btn btn-outline mb-6">
              <IoArrowBackOutline />
              <button className="pl-3">Back</button>
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ReactBootcampProjects;
