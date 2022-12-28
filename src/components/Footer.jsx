import {
  FaLinkedin,
  FaGithub,
  FaFacebookMessenger,
  FaTelegram,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";

//----------------------------------------------------------

const Footer = () => {
  return (
    <div className="flex flex-col w-full mt-10 place-content-end">
      <div className="border-b border-bunker-gray-400 w-full h-10" />
      <div className="flex flex-row justify-between px-5 pt-5 pb-16 font-spacegrotesk text-bunker-gray-100">
        <a href="/">2023. Architech Rowee</a>
        <div className="flex flex-row gap-4">
          <a
            href="https://github.com/Rowee13"
            aria-label="github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="w-6 h-6 hover:text-bunker-gray-50 hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/roweeapor/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="w-6 h-6 hover:text-bunker-gray-50 hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/rowee13/"
            aria-label="messenger"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookMessenger className="w-6 h-6 hover:text-bunker-gray-50 hover:scale-110" />
          </a>
          <a
            href="https://www.telegram.me/roweeapor"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTelegram className="w-6 h-6 hover:text-bunker-gray-50 hover:scale-110" />
          </a>
          <a
            href="mailto:roweeapor@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGmail className="w-6 h-6 hover:text-bunker-gray-50 hover:scale-110" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
