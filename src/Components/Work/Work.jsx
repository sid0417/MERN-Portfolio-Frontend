import { useParams } from "react-router-dom";
import data from "../../configuration/configuration.json";
import { useSelector } from "react-redux";
import { useRef, useEffect } from "react";

const Work = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const { id } = useParams();
  const project = data.work[id]; // ✅ Corrected way to access the project

  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play(); // Autoplay video on load
    }
  }, []);

  if (!project) {
    return (
      <div className="flex flex-col h-screen justify-center items-center text-center">
        <figure className="w-64 h-64">
          <img src="/redtree.png" alt="Project Not Found" />
        </figure>
        <h2 className="text-red-500 text-2xl mt-6 font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div className={`${
      darkMode
        ? "bg-gradient-to-b from-[#111827] to-[#000000] text-light"
        : "bg-gradient-to-b from-[#EBF5FF] to-[#5080A8] text-dark"
    } min-h-screen py-12 px-6`}>
      
      {/* Project Title */}
      <h2 className="text-4xl font-bold text-center text-green-500 mb-6">
        {project.name}
      </h2>

      {/* Buttons for Live Demo & GitHub Code (Moved to the top) */}
      <div className="flex justify-center gap-6 mb-10">
        {project.liveDemo && (
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            🔗 Live Demo
          </a>
        )}
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold px-6 py-2 rounded-lg shadow-md transition duration-300"
          >
            🛠 GitHub Code
          </a>
        )}
      </div>

      {/* Project Details Card */}
      <div className={`max-w-4xl mx-auto bg-opacity-10 p-6 rounded-xl shadow-lg backdrop-blur-md border border-opacity-30 ${
        darkMode ? 'border-gray-600 bg-[#1A2332]' : 'border-gray-300 bg-[#D4E7F9]'
      }`}>
        <div className="space-y-4">
          {/* Contributor */}
          <div className="flex flex-wrap gap-x-4">
            <h3 className="text-xl font-semibold text-green-500">Contributor:</h3>
            <p className="text-lg text-green-500">{project.contributor}</p>
          </div>

          {/* Technology Used */}
          <div className="flex flex-wrap gap-x-4">
            <h3 className="text-xl font-semibold text-green-500">Technology:</h3>
            <p className="text-lg text-green-500 break-words">{project.technology}</p>
          </div>
        </div>
      </div>

      {/* Video Section (Autoplay on load, but user can pause) */}
      <div id="video" className="flex justify-center my-10 px-4">
        <video 
          ref={videoRef}
          src={`${project.video}`} 
          className="shadow-2xl rounded-xl"
          controls
          muted
          loop
          playsInline
        ></video>
      </div>

      {/* Description */}
      <div id="description" className="max-w-4xl mx-auto text-center text-lg px-6 pb-6 text-light">
        {project.description}
      </div>
    </div>
  );
};

export default Work;
