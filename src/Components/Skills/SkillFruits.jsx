/* eslint-disable react/prop-types */
const SkillFruits = ({SkillFruits})=>{

  return(
    <div>
    <div className="absolute top-[24%] left-[15%] hover:scale-110 transition-all duration-300">
    <img
      src={`${SkillFruits[0]}`} 
      alt="JavaScript"
      className="w-8 h-8 rounded-full"
    />
  </div>
  <div className="absolute top-[15%] left-[75%] hover:scale-110 transition-all duration-300">
    <img
      src={`${SkillFruits[1]}`} 
      alt="Java"
      className="w-8 h-8 rounded-full top-4"
    />
  </div>
  <div className="absolute top-[30%] left-[45%] hover:scale-110 transition-all duration-300">
    <img 
    src={`${SkillFruits[2]}`} 
    alt="HTML" 
    className="w-8 h-8 rounded-full" />
  </div>
  <div className="absolute top-[45%] left-[80%] hover:scale-110 transition-all duration-300">
    <img 
    src={`${SkillFruits[3]}`} 
     alt="CSS" 
     className="w-8 h-8 rounded-full" />
  </div>
  
  </div>
  )
}

export default SkillFruits