import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const { id } = section;

        if (section.offsetTop <= scrollPosition + 200) {
          setActiveSection(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="bg-teal-900 fixed w-full z-10 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-4">
              <Link
                to="about"
                className={`text-xl font-semibold  hover:bg-teal-800 text-white px-3 py-2 cursor-pointer rounded-md ${
                  activeSection === "about"
                    ? "active-link font-bold text-white"
                    : ""
                }`}
                spy={true}
                duration={100}
                onSetActive={() => setActiveSection("about")}
              >
                Pierre-Baptiste Rozic
              </Link>
            </div>
          </div>
          <div className="hidden sm:flex">
            <Link
              to="about"
              className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${
                activeSection === "about"
                  ? "active-link font-bold text-white"
                  : ""
              }`}
              spy={true}
              duration={100}
              onSetActive={() => setActiveSection("about")}
            >
              À Propos
            </Link>
            <Link
              to="experience"
              className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${
                activeSection === "experience"
                  ? "active-link font-bold text-white"
                  : ""
              }`}
              spy={true}
              duration={100}
              offset={-50}
              onSetActive={() => setActiveSection("experience")}
            >
              Expérience
            </Link>
            <Link
              to="projects"
              className={`text-gray-300 hover:bg-teal-800 px-3 py-2 cursor-pointer rounded-md ${
                activeSection === "projects"
                  ? "active-link font-bold text-white"
                  : ""
              }`}
              spy={true}
              duration={100}
              offset={-50}
              onSetActive={() => setActiveSection("projects")}
            >
              Projets
            </Link>
          </div>
          <div className="flex">
            <div className="flex">
              <a
                href="https://github.com/pbarozic"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub
                  className="text-gray-300 hover:text-teal-800 mr-5"
                  size={32}
                />
              </a>

              <a
                href="https://www.linkedin.com/in/pierre-baptiste-rozic-6098ab90"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin
                  className="text-gray-300 hover:text-teal-800"
                  size={32}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
