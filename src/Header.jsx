import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaDownload } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ModeChanger from "./Components/Theme/ModeChanger";
import SideBar from "./SideBar";
import ScrollUp from "./ScrollUp";

const Header = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div
      className={`${
        darkMode ? "bg-[#111827] text-light" : "bg-[#EBF5FF] text-dark"
      }`}
    >
      <header className="shadow sticky z-50 top-0">
        <nav
          className={`${
            darkMode ? "border-y" : "border-gray-200"
          } px-4 lg:px-6 py-2.5`}
        >
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
              <div id="video" className="sm:w-[10%] w-[35%] h-auto mx-auto ml-8">
                <video
                  src={`${
                    darkMode ? "/logoDarkHead.mp4" : "/logoLightHead.mp4"
                  }`}
                  className="shadow-xl rounded-xl"
                  autoPlay
                  muted
                  loop
                ></video>
              </div>
            </Link>

            {/* Navigation + Icons */}
            <div className="flex items-center gap-x-6">
              {/* Navigation Links (Hidden below md) */}
              <ul className="hidden md:flex items-center gap-x-4">
                <li>
                  <Link
                    to="/"
                    className={`md:block font-semibold transition ${
                      darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`md:block font-semibold transition ${
                      darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
                    }`}
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/skills"
                    className={`md:block font-semibold transition ${
                      darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
                    }`}
                  >
                    Skills
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`md:block font-semibold transition ${
                      darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
                    }`}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              
              {/* Resume Button - Visible on all screens with download icon */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FaDownload /> Resume
              </a>

              {/* Mode Changer */}
              <ModeChanger />

              {/* Sidebar Toggle Button (Visible on small screens) */}
              <button
                className="md:hidden px-4 py-2 rounded"
                onClick={() => setIsSidebarVisible((prev) => !prev)}
              >
                <FaBars />
              </button>
            </div>
          </div>
        </nav>

        {/* Sidebar Component - Pass Props to Control Visibility */}
        <SideBar
          isVisible={isSidebarVisible}
          setIsVisible={setIsSidebarVisible}
          darkMode={darkMode}
        />

        <ScrollUp />
      </header>
    </div>
  );
};

export default Header;