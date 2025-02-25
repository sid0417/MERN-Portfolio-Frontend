import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";  // Import the arrow icon

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show button after 300px scroll
    } else {
      setIsVisible(false); // Hide button if scrolled back up
    }
  };

  // Scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  // Attach the scroll event listener on mount and cleanup on unmount
  useEffect(() => {
    window.addEventListener("scroll", checkScrollPosition);

    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <>
      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <FaArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default ScrollUp;
