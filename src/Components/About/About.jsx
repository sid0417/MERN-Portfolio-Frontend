import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";
import Content from "./Content";
import { useSelector } from "react-redux";
import data from "../../configuration/configuration.json";

function About() {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const element = useRef(null);
  const typed = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    typed.current = new Typed(element.current, {
      strings: [
        "_I am Siddharth Roy",
        "_a Tech enthusiast",
        "_a Coder and",
        "_a Frontend Developer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, []);

  // Function to toggle animation
  const toggleAnimation = () => {
    if (isPaused) {
      // Resume animation
      typed.current.start();
    } else {
      // Pause animation
      typed.current.stop();
    }
    setIsPaused(!isPaused);
  };

  return (
    <div
      className={`${
        darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
      }`}
    >
      <div className="relative flex p-4 justify-center items-center">
        {/* Typing Animation */}
        <span
          ref={element}
          className="text-4xl font-bold"
          style={{ whiteSpace: "nowrap" }}
        ></span>

        {/* Toggle Play/Pause Button */}
        <button
          onClick={toggleAnimation}
          className="absolute top-1 sm:top-2 right-1 sm:right-24 w-6 h-6 flex items-center justify-center shadow-md"
          title={isPaused ? "Play" : "Pause"}
        >
          {isPaused ? "▶️" : "⏸️"}
        </button>
      </div>

      <div className="flex flex-col md:flex-row items-center md:justify-center p-4 md:p-8 sm:py-6 h-auto md:h-screen space-y-6 md:space-y-0">
        <div id="left" className="flex-shrink-0 pr-6 ">
          <img
            src={`${darkMode ? "image-dark.png" : "image.png"}`}
            alt="profile"
            className="w-72 h-full rounded-full object-cover brightness-110 contrast-115"
          />
        </div>
        <div
          id="right"
          className={`${
            darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
          } flex-grow pl-8 rounded-lg shadow-lg p-4 space-y-4`}
        >
          {/* Heading */}
          <div
            id="heading"
            className="text-3xl font-extrabold border-b-2 border-gray-300 pb-2"
          >
            About Me
          </div>

          {/* Introductory Paragraph */}
          <div id="body" className="space-y-4">
            <p className="text-xl font-semibold">I am a Software Engineer:</p>
            <ul className="list-disc pl-6 space-y-3">
              {data.about.intro.map((val, index) => (
                <li key={index}>{val}</li>
              ))}
            </ul>
            {/* Personal Paragraph */}
            <p className="text-md leading-relaxed">{data.about.personal}</p>
          </div>
        </div>
      </div>
      <div id="section2" className="gap-6 p-6 rounded-lg shadow-lg ">
        {/* Experience Section */}
        <Content darkMode={darkMode} />
      </div>
    </div>
  );
}

export default About;
