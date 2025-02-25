import { IoSunnyOutline } from "react-icons/io5";
import { FaRegMoon } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../store/slices/themeSlice";

function ModeChanger() {
  const dispatch = useDispatch();
  
  const darkMode = useSelector((state) => state.theme.darkMode); // Get theme state from Redux
 

  return (
    <button
      className="p-2 rounded-full transition duration-300 ease-in-out hover:scale-110"
      onClick={() => dispatch(toggleTheme())}
    >
      {darkMode ? (
        <IoSunnyOutline className="text-yellow-400 text-3xl drop-shadow-lg" />
      ) : (
        <FaRegMoon className="text-gray-300 text-3xl drop-shadow-md" />
      )}
    </button>
  );
}

export default ModeChanger;
