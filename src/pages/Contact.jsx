import {
  FaFacebookMessenger,
  FaTelegram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail, SiDiscord } from "react-icons/si";

import useDocumentTitle from "../hooks/useDocumentTitle";
import Layout from "../components/Layout";
import { quotes } from "../constants";

//----------------------------------------------------------

const Contact = () => {
  useDocumentTitle("Contact Me | ArchitechRowee");

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center h-full md:h-screen lg:h-full 2xl:h-screen font-outfit text-whisper-white">
        <div className="pb-28 w-full lg:w-6/12 h-[450px]">
          <h1 className="text-3xl font-bold pb-10 text-center">{quote.text}</h1>
          <p className="text-zinc-400 text-center">- {quote.from}</p>
        </div>
        <div className="border-b border-zinc-600 w-full h-10 mb-14" />
        <div className="flex flex-col md:flex-row justify-start items-start w-full">
          <div className="lg:w-6/12 pb-10">
            <h3 className="font-bold text-xl lg:text-3xl text-whisper-white">
              Feel free to reach out thru socials
            </h3>
            <div className="grid xl:grid-rows-3 xl:grid-flow-col grid-rows-contact-grid gap-4 gap-x-7 justify-start pt-5">
              <a
                href="https://www.facebook.com/rowee13/"
                aria-label="messenger"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-full md:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <FaFacebookMessenger className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">
                  Messenger
                </h3>
              </a>
              <a
                href="https://www.telegram.me/roweeapor"
                aria-label="Telegram"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <FaTelegram className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">
                  Telegram
                </h3>
              </a>
              <a
                href="https://www.discordapp.com/users/764334976640483329"
                aria-label="discord"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <SiDiscord className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">
                  Discord
                </h3>
              </a>
              <a
                href="https://www.linkedin.com/in/roweeapor/"
                aria-label="Linkedin"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <FaLinkedin className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">
                  LinkedIN
                </h3>
              </a>
              <a
                href="https://github.com/Rowee13"
                aria-label="Github"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <FaGithub className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">Github</h3>
              </a>
              <a
                href="mailto:roweeapor@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
              >
                <SiGmail className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">Gmail</h3>
              </a>
            </div>
          </div>
          <div className="lg:w-6/12">
            <h1 className="font-bold text-xl lg:text-3xl">
              or fill out the form below
            </h1>
            <form className="w-full pt-5 text-zinc-400">
              <fieldset>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    placeholder="What is your name?"
                    className="rounded-md bg-bunker-gray-700 py-2 pl-3"
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="What is your email?"
                    className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    placeholder="Your purpose on reaching out"
                    className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    rows={6}
                    placeholder="Write your message here"
                    className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                  />
                </div>
                <button className="bg-bunker-gray-800 w-full sm:w-52 py-3 mt-3 font-bold text-lg text-whisper-white rounded-md hover:bg-riptide-accent hover:text-bunker-gray-800">
                  SUBMIT
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
