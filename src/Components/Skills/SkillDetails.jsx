/* eslint-disable react/prop-types */
const SkillDetails = ({ skillData, darkMode }) => {
  return (
    <div
      className={`${
        darkMode ? "text-light" : "text-dark"
      } px-4  border rounded-lg shadow-xl `}
    >
      <h2 className="font-bold text-xl mb-2 ">{skillData.category}</h2>
      <ul className="list-disc list-inside px-4">
        <div className="flex flex-col space-y-2">
          {skillData.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <span className="text-lg font-bold ">{item}</span>
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
    </div>
  );
};

export default SkillDetails;
