/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLongArrowAltLeft } from "react-icons/fa";


const SideBar= ({darkMode})=> {
  // Add toggle function
  const [isVisible, setIsVisible] = useState(true); // State inside SideBar


  const toggleSidebar = () => {
    setIsVisible(!isVisible);
  };
  const handleLinkClick = () => {
    setIsVisible(false); // Hide sidebar when a link is clicked
  };
  return (
    <div
      className={`fixed top-0 right-0 h-screen w-32 shadow-lg transition-transform duration-300 z-10 
        ${darkMode ? "bg-dark text-light" : "bg-light text-dark"
      } ${isVisible ? "translate-x-0" : "translate-x-full"}`} // Conditional translation
    >
     
      <button onClick={toggleSidebar} className="px-6 py-1">
        {" "}
        {/* Call toggle function */}
        <FaLongArrowAltLeft className="w-6 h-6" />
      </button>
      
     
      <nav className="flex flex-col">
        <Link
          to="/"
          className={`${
            darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
          } px-6 py-1 font-semibold transition duration-300 `}
          onClick={handleLinkClick}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`${
            darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
          } px-6 py-1 font-semibold transition duration-300 `}
          onClick={handleLinkClick}
        >
          About
        </Link>
        <Link
          to="/skills"
          className={`${
            darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
          } px-6 py-1 font-semibold transition duration-300 `}
          onClick={handleLinkClick}
        >
          Skills
        </Link>
        <Link
          to="/contact"
          className={`${
            darkMode ? "hover:text-[#4a59e0]" : "hover:text-[#60A5FA]"
          } px-6 py-1 font-semibold transition duration-300 `}
          onClick={handleLinkClick}
        >
          Contact
        </Link>
      </nav>
    </div>
  );
}

export default SideBar;