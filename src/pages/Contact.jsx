import {
  FaFacebookMessenger,
  FaTelegram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { SiGmail, SiDiscord } from "react-icons/si";

import useDocumentTitle from "../hooks/useDocumentTitle";
import Layout from "../components/Layout";

//----------------------------------------------------------

const Contact = () => {
  useDocumentTitle("Contact Me | ArchitechRowee");

  return (
    <Layout>
      <div className="h-full md:h-screen lg:h-full 2xl:h-screen font-outfit">
        <h1 className="font-bold text-xl lg:text-3xl text-whisper-white">
          Feel free to reach out thru socials
        </h1>
        <div className="grid sm:grid-rows-3 sm:grid-flow-col grid-rows-contact-grid gap-4 gap-x-7 justify-start pt-5">
          <a
            href="https://www.facebook.com/rowee13/"
            aria-label="messenger"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <FaFacebookMessenger className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">Messenger</h3>
          </a>
          <a
            href="https://www.telegram.me/roweeapor"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <FaTelegram className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">Telegram</h3>
          </a>
          <a
            href="https://www.discordapp.com/users/764334976640483329"
            aria-label="discord"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <SiDiscord className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">Discord</h3>
          </a>
          <a
            href="https://www.linkedin.com/in/roweeapor/"
            aria-label="Linkedin"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <FaLinkedin className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">LinkedIN</h3>
          </a>
          <a
            href="https://github.com/Rowee13"
            aria-label="Github"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <FaGithub className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">Github</h3>
          </a>
          <a
            href="mailto:roweeapor@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noreferrer noopener"
            className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-40 py-2 pl-6 rounded-md text-whisper-white hover:bg-riptide-accent hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out delay-100 duration-150"
          >
            <SiGmail className="w-5 h-5" />
            <h3 className="font-semibold pl-4 sm:pl-2 text-base">Gmail</h3>
          </a>
        </div>
        <h1 className="font-bold text-xl lg:text-3xl text-whisper-white pt-14">
          or fill out the form below
        </h1>
        <form>
          <fieldset className="pt-5">
            <div className="flex flex-col w-full pb-3 md:w-2/5 text-sm">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                placeholder="What is your name?"
                className="rounded-md bg-bunker-gray-700 py-2 pl-3"
              />
            </div>
            <div className="flex flex-col w-full pb-3 md:w-2/5 text-sm">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                placeholder="What is your email?"
                className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
              />
            </div>
            <div className="flex flex-col w-full pb-3 md:w-2/5 text-sm">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                placeholder="Your purpose on reaching out"
                className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
              />
            </div>
            <div className="flex flex-col w-full pb-3 md:w-2/5 text-sm">
              <label htmlFor="message">Message</label>
              <textarea
                type="text"
                rows={6}
                placeholder="Write your message here"
                className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
              />
            </div>
            <button className="bg-bunker-gray-800 w-full sm:w-52 py-3 mt-3 font-bold text-lg text-whisper-white rounded-md hover:bg-riptide-accent hover:text-bunker-gray-800 hover:animate-pulse">
              SUBMIT
            </button>
          </fieldset>
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
