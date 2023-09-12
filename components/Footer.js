import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-teal-900 py-4 px-6 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <p className="lg:text-sm text-xs">© 2023 Pierre-Baptiste Rozic</p>
        <div className="flex">
          <a
            href="mailto:pierrebaptiste.rozic@gmail.com"
            className="lg:text-sm text-xs text-white hover:text-teal-600 mr-4"
          >
            pierrebaptiste.rozic@gmail.com
          </a>
          <a
            href="https://github.com/pbarozic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub
              className="text-white hover:text-teal-800 mr-2"
              size={24}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/pierre-baptiste-rozic-6098ab90"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white hover:text-teal-800" size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
