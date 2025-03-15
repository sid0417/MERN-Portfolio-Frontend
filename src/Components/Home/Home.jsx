import Cloud from "../Theme/Cloud";
import Star from "../Theme/Star";
import Leaf from "./Leaf";
import { useSelector } from "react-redux";
import WorkGrid from "./WorkGrid";

function Home() {
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div className="mb-[-4%]">
      {!darkMode && <Cloud />}

      <div
        className={`${darkMode ?  "bg-dark-gradient text-light" : "bg-light-gradient text-dark"}`}
      >
        <div className="h-screen w-full transition-colors duration-500 relative flex justify-center items-center overflow-hidden">
          {darkMode && <Star />}
          <div className="flex flex-col justify-center items-center font-sans ">
            <h1 className="text-4xl sm:text-6xl font-bold p-2 py-2 sm:py-8 mt-[-16%]">
              Hi, I am Siddharth.
            </h1>
            <p className="text-md text-center m-4 sm:px-72">
              An enthusiastic young developer passionate about creating
              engaging, user-friendly web experiences, learning and growing with
              each line of code.
            </p>
          </div>
          <Leaf />
        </div>
        <div id="work">
          <div
            id="heading"
            className="text-4xl sm:text-5xl font-bold  mt-[-24%] sm:mt-2 p-2 flex justify-start"
          >
            My Work
          </div>
          <div className="mt-[2%]">
            <WorkGrid darkMode={darkMode}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
