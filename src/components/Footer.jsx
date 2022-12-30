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
    <footer className="flex flex-col w-full mt-10 place-content-end">
      <div className="border-b border-zinc-600 w-full h-10" />
      <div className="flex flex-col-reverse md:flex-row items-center justify-between pt-5 pb-16 font-spacegrotesk text-zinc-500">
        <a href="/">2023. Architech Rowee</a>
        <div className="flex flex-row gap-4 pb-5 lg:pb-0">
          <a
            href="https://github.com/Rowee13"
            aria-label="github"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaGithub className="w-6 h-6 hover:text-riptide-accent hover:scale-110" />
          </a>
          <a
            href="https://www.linkedin.com/in/roweeapor/"
            aria-label="linkedin"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaLinkedin className="w-6 h-6 hover:text-riptide-accent hover:scale-110" />
          </a>
          <a
            href="https://www.facebook.com/rowee13/"
            aria-label="messenger"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaFacebookMessenger className="w-6 h-6 hover:text-riptide-accent hover:scale-110" />
          </a>
          <a
            href="https://www.telegram.me/roweeapor"
            aria-label="Telegram"
            target="_blank"
            rel="noreferrer noopener"
          >
            <FaTelegram className="w-6 h-6 hover:text-riptide-accent hover:scale-110" />
          </a>
          <a
            href="mailto:roweeapor@gmail.com"
            aria-label="Email"
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGmail className="w-6 h-6 hover:text-riptide-accent hover:scale-110" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
