/* eslint-disable react/prop-types */
const SkillDetailLap = ({ skillData, darkMode }) => {
  return (
    <ul
      className={`${
        darkMode ? " text-light" : " text-dark"
      }list-disc list-inside  px-4 mt-[-16%]`}
    >
      <div className="flex flex-col space-y-2">
        {skillData.items.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <span className="text-lg font-bold">{item}</span>
            <div className="flex space-x-1">
              {[...Array(skillData.level[index] || 0)].map((_, i) => (
                <img
                  key={i}
                  src="clove.png"
                  alt="Skill Level"
                  className="w-6 h-6"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </ul>
  );
};

export default SkillDetailLap;
