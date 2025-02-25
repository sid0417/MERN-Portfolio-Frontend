import Cloud from "../Theme/Cloud";
import { useParams } from "react-router-dom";
import data from "../../configuration/configuration.json";
import { useSelector } from "react-redux";

const Work = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const { id } = useParams();
  const project = data.work[id]; // ✅ Corrected way to access the project

  if (!project) {
    return (
      <div className="text-center flex-col h-screen flex justify-center items-center">
        <figure className="w-96 h-96">
          <img src="/redtree.png" alt="" />
        </figure>
        <h2 className=" text-red-500 text-2xl mt-12 ml-6 font-bold">Project Not Found</h2>
      </div>
    );
  }

  return (
    <div
      className={`${darkMode ? "bg-dark text-light" : "bg-light text-dark"} `}
    >
      <Cloud />

      <div className="flex justify-center items-center h-96 w-full px-2 md:mt-12">
        <div className="w-full max-w-4xl ">
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-green-500 mb-6">
            {project.name} {/* ✅ Dynamically render project name */}
          </h2>

          {/* Contributor & Technology Used */}
          <div className="space-y-4 sm:ml-72 ml-12">
            {/* Contributor */}
            <div className="grid grid-cols-[auto_1fr] items-center gap-x-4">
              <h3 className="text-lg sm:text-xl font-semibold text-green-500">
                Contributor:
              </h3>
              <h3 className="text-lg sm:text-xl text-green-500">
                {project.contributor}
              </h3>
            </div>

            {/* Technology Used */}
            <div className="grid grid-cols-[auto_1fr] items-start gap-x-4">
  <h3 className="text-lg sm:text-xl font-semibold text-green-500">
    Technology:
  </h3>
  <div className="text-lg sm:text-xl text-green-500 whitespace-normal break-all">
    {project.technology}
  </div>
</div>


          </div>
        </div>
      </div>

      <div id="video" className="flex justify-center w-[90%] h-auto mx-auto">
        <video src="/project.mp4" className="shadow-xl rounded-xl"></video>
      </div>

      <div
        id="description"
        className="flex justify-center items-center px-8 mt-6 mb-6"
      >
        {project.description} {/* ✅ Dynamically render project description */}
      </div>
    </div>
  );
};

export default Work;
