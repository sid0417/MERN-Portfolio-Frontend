import { useState } from "react";
import { useSelector } from "react-redux";
import skillsData from "../../configuration/configuration.json";
import SkillDetails from "./SkillDetails";
import SkillFruits from "./SkillFruits";
import SkillDetailLap from "./SkillDetailLap";

const Skills = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);
  const [skillType, setSkillType] = useState("Programming");

  const handleOnClick = (skill) => setSkillType(skill);
  const selectedSkill = skillsData.skills.find(
    (skill) => skill.id === skillType
  );

  return (
    <div
      className={`font-poppins py-2 ${darkMode ? "bg-dark text-light" : "bg-light text-dark"}`}
    >
      <h1 className="text-4xl font-bold mt-2 ml-2 mb-2">
        My Skills
      </h1>

      <div className="sm:grid sm:grid-rows-[auto_auto] sm:mb-[-3.5%] min-h-screen" id="parent-1">


        <div className="md:grid md:grid-cols-[3fr_2fr]" id="child-1">

          <div className="md:grid md:grid-rows-2" id="gc-1">
            <div className="ml-2 md:grid md:grid-cols-3">
              {/* Skill Selection Buttons */}
              {skillsData.skills.map((skill) => (
                <div
                  key={skill.id}
                  className={`relative w-64 mb-2 sm:mb-2 lg:mb-0 sm:mr-2 sm:w-36 sm:text-sm lg:w-64 h-16 cursor-pointer hover:scale-110 transition-transform duration-300 ${
                    skillType === skill.id
                      ? "border-2 border-[#8aaee0] rounded-lg ring-2 ring-[#8aaee0]"
                      : ""
                  }`}
                  onClick={() => handleOnClick(skill.id)}
                >
                  <img
                    src="singlelog.webp"
                    alt="Wood log"
                    className="w-full h-full object-cover"
                  />
                  <h3 className="absolute inset-0 flex items-center justify-center  font-bold text-lg leading-tight">
                    {skill.val.category}
                  </h3>
                </div>
              ))}
            </div>
            <div className="hidden md:block">
              {selectedSkill && (
                <SkillDetailLap skillData={selectedSkill.val} darkMode={darkMode} />
              )}
            </div>
          </div>

          <div className="grid grid-rows-[auto_auto] gap-y-6 sm:flex sm:flex-row" id="gc-2">

            <div className="justify-items-center" id="gc-2-c-1">
              <div className="relative">
                <img
                  src="treeskills.png"
                  alt="tree of knowledge"
                  className="mb-[-11%]"
                />
                <SkillFruits SkillFruits={selectedSkill?.val.skillFruits} />
              </div>
              <img src="groundskills.png" alt="" className="md:hidden mt-6" />
            </div>

            <div className="sm:flex sm:flex-row md:hidden p-4 hover:scale-110 duration-300 ease-in-out" id="gc-2-c-2">
              {selectedSkill && <SkillDetails skillData={selectedSkill.val} darkMode={darkMode}/>}
            </div>

          </div>

        </div>


        <div className="hidden md:block w-auto h-auto mt-[-4%]" id="child-2">
          <img src="groundskills.png" alt="" />
        </div>

        
      </div>


    </div>
  );
};

export default Skills;
