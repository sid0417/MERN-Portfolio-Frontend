import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useSelector } from "react-redux";
import ModeChanger from "./Components/Theme/ModeChanger";
import SideBar from "./SideBar";
import ScrollUp from "./ScrollUp";

const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div className={`${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}>
      <header className="shadow sticky z-50 top-0">
        <nav className={`${darkMode ? "border-y" : "border-gray-200"} px-4 lg:px-6 py-2.5`}>
          <div className="flex justify-between items-center mx-auto max-w-screen-xl">
            
            {/* Logo Section */}
            <Link to="/" className="flex items-center">
              <div id="video" className="w-[10%] h-auto mx-auto ml-8">
                <video
                  src={`${darkMode ? "/logoDarkHead.mp4" : "/logoLightHead.mp4"}`}
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
                  <Link to="/" className={`md:block font-semibold transition ${darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"}`}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className={`md:block font-semibold transition ${darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"}`}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className={`md:block font-semibold transition ${darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"}`}>
                    Skills
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className={`md:block font-semibold transition ${darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"}`}>
                    Contact
                  </Link>
                </li>
              </ul>

              {/* Mode Changer */}
              <ModeChanger />

              {/* Sidebar Toggle Button (Visible on small screens) */}
              <button className="md:hidden px-4 py-2 rounded" onClick={() => setIsVisible(!isVisible)}>
                <FaBars />
              </button>
            </div>
          </div>
        </nav>

        {/* Sidebar Component (Conditionally Rendered) */}
        {isVisible && <SideBar isVisible={isVisible} setIsVisible={setIsVisible} darkMode={darkMode} />}
        <ScrollUp />
      </header>
    </div>
  );
};

export default Header;
