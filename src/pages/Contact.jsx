import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
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
import { patternDivider, emailSentIcon } from "../assets";

//----------------------------------------------------------

const Contact = () => {
  useDocumentTitle("Contact Me | ArchitechRowee");

  //* quote generator
  const [getQuote, setGetQuote] = useState({
    text: "You are never too old to set new goal, or to dream a new dream.",
    from: "Clive Staples Lewis",
  });

  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];

  const getNewQuote = () => {
    setGetQuote(quote);
  };

  //* contact form
  const [loading, setLoading] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ criteriaMode: "all" });

  const onSubmit = (e) => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_8ihywe8",
        "template_rvr56og",
        form.current,
        "LrY0TPqbGBt5uxsEn"
      )
      .then(
        (result) => {
          setLoading(false);
          setIsFormSubmitted(true);
          console.log(result.text);
        },
        (error) => {
          alert("Failed to send message! Please try again later.", error.text);
        }
      );

    e.target.reset();
  };

  return (
    <Layout>
      <div className="flex flex-col justify-start items-center h-full font-outfit text-whisper-white">
        <header className="flex flex-col justify-between items-center pb-28 w-full md:w-9/12 lg:w-7/12 h-full">
          <h1 className="text-2xl md:text-4xl font-bold pb-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-riptide-accent to-riptide-bright">
            "{getQuote.text}"
          </h1>
          <p className="text-zinc-400 text-center">- {getQuote.from}</p>
          <img src={patternDivider} alt="divider" className="pt-10" />
          <button
            onClick={getNewQuote}
            className="btn mt-10 w-10/12 md:w-4/12 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:shadow-navcontainer-shadow hover:border-0 hover:text-bunker-gray-900"
          >
            Get new quote
          </button>
        </header>

        <div className="border-b border-zinc-500 w-full h-10 mb-14" />

        <div className="flex flex-col md:flex-row justify-start items-start w-full h-full">
          {/* === social links === */}
          <div className="w-full lg:w-6/12 pb-10">
            <h3 className="font-bold text-xl lg:text-3xl text-whisper-white text-center md:text-left">
              Feel free to reach out thru socials
            </h3>
            <div className="grid xl:grid-rows-3 xl:grid-flow-col grid-rows-contact-grid gap-4 gap-x-7 justify-center md:justify-start pt-5">
              <a
                href="https://www.facebook.com/rowee13/"
                aria-label="messenger"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-full md:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
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
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
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
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
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
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
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
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
              >
                <FaGithub className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">Github</h3>
              </a>
              <a
                href="mailto:roweeapor@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noreferrer noopener"
                className="flex flex-row justify-start items-center bg-bunker-gray-800 w-48 sm:w-52 py-4 pl-12 rounded-md text-zinc-400 border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 hover:scale-105 transition-all ease-in-out duration-150"
              >
                <SiGmail className="w-5 h-5" />
                <h3 className="font-semibold pl-4 sm:pl-2 text-base">Gmail</h3>
              </a>
            </div>
          </div>

          {/* === contact form === */}
          <div className="w-full lg:w-6/12 pt-10 md:pt-0">
            <h1 className="font-bold text-xl lg:text-3xl text-center md:text-left">
              or fill out the form below
            </h1>
            {!isFormSubmitted ? (
              <form
                id="contact-form"
                ref={form}
                noValidate
                onSubmit={handleSubmit(onSubmit)}
                className="w-full pt-5 text-zinc-400"
              >
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="name">
                    Name<sup className="text-riptide-accent text-md">*</sup>
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", {
                      required: "Name is required",
                      maxLength: {
                        value: 40,
                        message: "Input exceed max length.",
                      },
                    })}
                    placeholder="What is your name?"
                    className="form-input rounded-md bg-bunker-gray-700 py-2 pl-3 border-bunker-gray-400 focus:caret-riptide-accent focus:border focus:border-riptide-accent"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="name"
                    render={({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-riptide-accent">
                          {message}
                        </p>
                      ))
                    }
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="email">
                    Email<sup className="text-riptide-accent text-md">*</sup>
                  </label>
                  <input
                    type="email"
                    name="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="What is your email?"
                    className="form-input rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm border-bunker-gray-400 focus:caret-riptide-accent focus:border focus:border-riptide-accent"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="email"
                    render={({ messages }) =>
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type} className="text-riptide-accent">
                          {message}
                        </p>
                      ))
                    }
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    {...register("subject")}
                    placeholder="Your purpose on reaching out"
                    className="form-input rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm border-bunker-gray-400 focus:caret-riptide-accent focus:border focus:border-riptide-accent"
                  />
                </div>
                <div className="flex flex-col w-full pb-3 lg:w-4/5 text-sm">
                  <label htmlFor="message">
                    Message<sup className="text-riptide-accent text-md">*</sup>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    {...register("message", {
                      required: "Sorry, message is required too.",
                    })}
                    rows={6}
                    placeholder="Write your message here"
                    className="form-textarea rounded-md bg-bunker-gray-700 py-2 pl-3 text-sm border-bunker-gray-400 focus:caret-riptide-accent focus:border focus:border-riptide-accent"
                  />
                  <ErrorMessage
                    errors={errors}
                    name="message"
                    render={({ message }) => (
                      <p className="text-riptide-accent">{message}</p>
                    )}
                  />
                </div>
                <button
                  type="submit"
                  value="Send"
                  className="bg-bunker-gray-800 w-full md:w-52 py-3 mt-3 font-bold text-lg text-whisper-white rounded-md border border-bunker-gray-400 hover:bg-gradient-to-r from-riptide-accent to-riptide-bright hover:text-bunker-gray-800 transition-all ease-in-out duration-150"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center pt-10">
                <img src={emailSentIcon} alt="email-sent-icon" />
                <h3 className="text-2xl text-center px-28">
                  Thank you for reaching out. I will respond as soon as
                  possible.
                </h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
