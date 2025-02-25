/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import data from "../../configuration/configuration.json";

function SmallRight({ darkMode }) {
  return (
    <>
      <div
        id="work-list"
        className="grid grid-cols-1 sm:grid-cols-3 justify-center items-stretch p-6 gap-8 sm:mb-[4%]"
      >
        {/* First Div */}
        <div
          id={data.work.todo.id}
          className={`${
            darkMode ? "bg-[#283445] text-light" : "bg-[#c6d7ec] text-dark"
          } relative col-span-1 sm:col-span-2 items-center overflow-hidden 
            h-[200px] sm:h-[450px] rounded-3xl transform transition-transform 
            hover:-translate-y-4 duration-700 ease-in-out group`}
        >
          <Link to={`/work/${data.work.todo.id}`} className="absolute inset-0 z-10"></Link>
          <div
            id="topic"
            className="text-center text-xl p-4 sm:text-2xl sm:p-12 font-semibold"
          >
            {data.work.todo.name}
          </div>
          <figure>
            <img
              src="/pimage.png"
              alt=""
              className="absolute top-[30%] left-[20%]
                rounded-lg transition-transform duration-500 
                group-hover:translate-y-6 ease-in-out"
            />
          </figure>
        </div>

        {/* Second Div */}
        <div
          id={data.work.work1.id}
          className={`${
            darkMode ? "bg-[#283445] text-light" : "bg-[#c6d7ec] text-dark"
          } relative col-span-1 sm:col-span-1 items-center shadow-2xl overflow-hidden 
            h-[200px] sm:h-[450px] rounded-3xl transform transition-transform 
            hover:-translate-y-4 duration-500 ease-in-out group`}
        >
          <Link to={`/work/${data.work.work1.id}`} className="absolute inset-0 z-10"></Link>
          <div
            id="topic"
            className="text-center text-xl p-4 sm:text-2xl sm:p-12 font-semibold"
          >
            {data.work.work1.name}
          </div>
          <figure>
            <img
              src="/pimage.png"
              alt=""
              className="absolute top-[30%] sm:top-[64%] left-[20%] sm:left-[70%] sm:scale-[200%]
                rounded-lg transition-transform duration-500 
                group-hover:translate-y-6 ease-in-out"
            />
          </figure>
        </div>
      </div>
    </>
  );
}

export default SmallRight;
