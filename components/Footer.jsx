import { Github, Linkedin } from "lucide-react";
import { PiMediumLogoBold } from "react-icons/pi";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col items-center justify-center w-full py-6">
        <div className="flex flex-row flex-wrap space-x-2">
          {/* GitHub */}
          <a
            className="flex items-center p-2 mt-3 mb-1 mr-1 transition-all duration-200 bg-gray-500 rounded-full hover:text-gray-600 hover:font-semibold hover:bg-transparent w-max aspect-square"
            href="https://github.com/tushar-upadhya/colorCopilot"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-5 h-5" />
          </a>
          {/* LinkedIn */}
          <a
            className="flex items-center p-2 mt-3 mb-1 mr-1 text-lg font-semibold uppercase transition-all duration-200 ease-linear bg-blue-600 rounded-full outline-none hover:text-blue-600 hover:bg-transparent hover:text- w-max aspect-square hover:font-semibold"
            href="https://www.linkedin.com/in/tushar-upadhyay-54029b135/?original_referer=https%3A%2F%2Ftusharupadhyay.vercel.app%2F"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-5 h-5" />
          </a>

          {/* Medium */}
          <a
            className="flex items-center p-2 mt-3 mb-1 mr-1 text-lg font-semibold uppercase transition-all duration-200 rounded-full hover:bg-transparent hover:text-rose-600 bg-rose-500 hover:text-yellow w-max aspect-square hover:font-semibold"
            href="https://medium.com/@tusharupadhyay0405"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMediumLogoBold className="w-5 h-5 " />
          </a>
        </div>

        <div className="flex items-center justify-center w-full mt-2">
          <a
            href="https://tusharupadhyay.vercel.app/"
            className="text-xl transition-all duration-300 opacity-75 hover:opacity-95"
            target="_blank"
            rel="noopener noreferrer"
          >
            {"</>"}{" "}
            <span className="duration-200 hover:transition-all hover:font-semibold ">
              Tushar Upadhyay
            </span>
            {"</>"}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
