/* eslint-disable react/prop-types */
import Card from "./Card";
import data from "../../configuration/configuration.json";

const Content = ({ darkMode }) => {
  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-6 mt-6 ${
        darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
      }`}
    >
      {/* Experience Section */}
      <div
        id="experience"
        className={`p-4 ${
          darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
        } rounded-lg shadow-md md:hover:shadow-xl hover:shadow-lg md:hover:scale-105 hover:scale-110 md:transition-shadow md:duration-1000 duration-300 ease-in-out`}
      >
        <div id="header" className="text-2xl font-bold mb-2">
          Experience
        </div>
        <div className="relative border-l-2 border-green-600 mt-4">
          {data.experience.map((exp) => (
            <Card
              key={exp.id}
              items={exp.item}
              time={exp.time}
              vals={exp.vals}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>

      {/* Education Section */}
      <div
        id="education"
        className={`p-4 ${
          darkMode ?"bg-dark-gradient text-light" : "bg-light-gradient text-dark"
        } rounded-lg shadow-md md:hover:shadow-xl hover:shadow-lg md:hover:scale-105 hover:scale-110 md:transition-shadow md:duration-1000 duration-300 ease-in-out`}
      >
        <div id="header" className="text-2xl font-bold mb-2">
          Education
        </div>
        <div className="relative border-l-2 border-green-600 mt-4">
          {data.education.map((edu) => (
            <Card
              key={edu.id}
              items={edu.items} // ✅ Corrected to match JSON
              time={edu.time}
              vals={edu.vals}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
