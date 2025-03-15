/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import data from "../../configuration/configuration.json";

const WorkGrid = ({ darkMode }) => {
  // Convert object to array and chunk into pairs
  const workItems = Object.values(data.work);
  const pairs = [];
  for (let i = 0; i < workItems.length; i += 2) {
    pairs.push(workItems.slice(i, i + 2));
  }

  return (
    <div
      id="work-list"
      className="grid grid-cols-1 sm:grid-cols-3 justify-center items-stretch p-6 gap-8 sm:mb-[4%]"
    >
      {pairs.map((pair, pairIndex) =>
        pair.map((workItem, index) => {
          // Determine card size (alternating pattern)
          const isLarge = pairIndex % 2 === 0 ? index === 1 : index === 0;

          return (
            <div
              key={workItem.id}
              id={workItem.id}
              className={`${
                darkMode ? "bg-gradient-to-b from-[#111827] to-[#000000] text-light" : "bg-gradient-to-b from-[#EBF5FF] to-[#5080A8]  text-dark"
              } relative ${isLarge ? "sm:col-span-2" : "sm:col-span-1"} 
                items-center shadow-2xl overflow-hidden h-[200px] sm:h-[450px] 
                rounded-3xl transform transition-transform hover:-translate-y-4 
                duration-500 ease-in-out group`}
            >
              <Link to={`/work/${workItem.id}`} className="absolute inset-0 z-10"></Link>
              <div className="text-center text-xl p-4 sm:text-3xl sm:p-12 font-semibold">
                {workItem.name}
              </div>
              <div className={`absolute 
                  ${isLarge ? "top-[40%] sm:top-[55%] left-[20%] sm:left-[45%] w-[150%] sm:w-auto" : 
                             "top-[30%] sm:top-[45%] left-[20%] sm:left-[25%] sm:w-[115%]"}`}>  
                <img
                  src={`${workItem.image}`}
                  alt=""
                  className={`rounded-lg shadow-lg sm:shadow-xl transition-transform duration-500 
                    group-hover:translate-y-6 ease-in-out 
                    ${isLarge ? "sm:scale-[180%]" : "sm:scale-[120%]"}`}
                />
              </div>
            
            </div>
          );
        })
      )}
    </div>
  );
};

export default WorkGrid;
