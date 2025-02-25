import PropTypes from 'prop-types';

function Card({items,time,vals,darkMode}) {
  return (
    
        <div
        className = {` ${darkMode ? "text-light" : "text-dark"} mb-10 ml-6 `}>
       
          <div className="absolute w-4 h-4 bg-green-600 rounded-full -left-2"></div>
          <h3 className="text-lg font-semibold">{items}</h3>
          <p className="text-sm font-bold">{time}</p>
          <ul className={` ${darkMode ? "text-secondaryLight" : "text-secondaryDark"} list-disc pl-6`}>
            {vals.map((val,index)=>{
              return <li key={index}>{val}</li>
            })}
          </ul>
        </div>
  )
}

Card.propTypes={
  items:PropTypes.string.isRequired,
  time:PropTypes.string.isRequired,
  vals:PropTypes.object.isRequired,
  darkMode:PropTypes.object.isRequired
};
export default Card
