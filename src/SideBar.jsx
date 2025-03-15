/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from "react-icons/fa";

const SideBar = ({ darkMode, isVisible, setIsVisible }) => {
  const toggleSidebar = () => {
    setIsVisible((prev) => !prev); // Correctly toggle from parent
  };

  const handleLinkClick = () => {
    setIsVisible(false); // Close when clicking a link
  };

  return (
    <div
      className={`fixed top-36 right-0 h-64 w-36 rounded-xl shadow-2xl transition-transform duration-300 z-10 p-8 text-lg
        ${
          darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
        } ${isVisible ? "translate-x-0" : "translate-x-full"}`}
    >
      <button onClick={toggleSidebar} className="px-6 py-1">
        <FaLongArrowAltLeft className="w-6 h-6" />
      </button>

      <nav className="flex flex-col">
        {["Home", "About", "Skills", "Contact"].map((item, index) => (
          <Link
            key={index}
            to={`/${item==='Home'?"":item.toLowerCase()}`}
            className={`px-6 py-1 font-semibold transition duration-300 ${
              darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
            }`}
            onClick={handleLinkClick}
          >
            {item}
          </Link>
          
        ))}
      </nav>
    </div>
  );
};

export default SideBar;
