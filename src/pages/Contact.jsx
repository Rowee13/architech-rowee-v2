import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
import { validateEmail } from "../utils/validateEmail";
import { patternDivider } from "../assets";

//----------------------------------------------------------

const EmailErrorMessage = () => {
  return (
    <p className="absolute bottom-[-6px] font-outfit text-red-500">
      Email must be valid
    </p>
  );
};

const Contact = () => {
  useDocumentTitle("Contact Me | ArchitechRowee");

  const [getQuote, setGetQuote] = useState({
    text: "You are never too old to set new goal, or to dream a new dream.",
    from: "Clive Staples Lewis",
  });
  const [name, setName] = useState("");
  const [email, setEmail] = useState({
    value: "",
    isTouched: false,
  });
  const [message, setMessage] = useState("");
  const form = useRef();

  const getIsFormValid = () => {
    return name && validateEmail(email) && message;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAILJS_SERVICE_ID,
        process.env.EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          alert(error.text);
        }
      );

    e.target.reset();
  };

  //* quote generator
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const getNewQuote = () => {
    setGetQuote(quote);
  };

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center h-full font-outfit text-whisper-white">
        <header className="flex flex-col justify-between items-center pb-28 w-full lg:w-7/12 h-full">
          <h1 className="text-3xl md:text-4xl font-bold pb-10 text-center text-riptide-accent">
            "{getQuote.text}"
          </h1>
          <p className="text-zinc-400 text-center">- {getQuote.from}</p>
          <img src={patternDivider} alt="divider" className="pt-10" />
          <button
            onClick={getNewQuote}
            className="btn mt-10 w-10/12 lg:w-4/12 border-0 hover:bg-riptide-accent hover:shadow-navcontainer-shadow hover:text-bunker-gray-900"
          >
            Get new quote
          </button>
        </header>
        <div className="border-b border-zinc-600 w-full h-10 mb-14" />
        <div className="flex flex-col md:flex-row justify-start items-start w-full h-full">
          <div className="w-full lg:w-6/12 pb-10">
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
          <div className="w-full lg:w-6/12">
            <h1 className="font-bold text-xl lg:text-3xl">
              or fill out the form below
            </h1>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="w-full pt-5 text-zinc-400"
            >
              <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="What is your name?"
                  className="rounded-md bg-bunker-gray-700 py-2 pl-3"
                />
              </div>
              <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="user_email"
                  onChange={(e) =>
                    setEmail({ value: e.target.value, ...email })
                  }
                  onBlur={(e) => sendEmail({ ...email, isTouched: true })}
                  placeholder="What is your email?"
                  className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                />
                {email.isTouched ? <EmailErrorMessage /> : null}
              </div>
              <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Your purpose on reaching out"
                  className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                />
              </div>
              <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                <label htmlFor="message">Message</label>
                <textarea
                  type="text"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={6}
                  placeholder="Write your message here"
                  className="rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm"
                />
              </div>
              <button
                type="submit"
                value="Semd"
                disabled={!getIsFormValid()}
                className="bg-bunker-gray-800 w-full sm:w-52 py-3 mt-3 font-bold text-lg text-whisper-white rounded-md hover:bg-riptide-accent hover:text-bunker-gray-800 transition-all ease-in-out delay-100 duration-150"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
