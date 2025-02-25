import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NotFound = () => {
  const darkMode = useSelector((store) => store.theme.darkMode);

  return (
    <div
      className={`w-screen h-screen flex justify-center items-center ${darkMode ? "bg-dark" : "bg-light"}`}
    >
      <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col items-center text-center w-96 sm:w-[30rem] text-dark">
        <img src="/404.png" alt="Tree" className="w-48 h-48 mb-4" />
        <h1 className="text-6xl font-bold relative">
          404
          <span className="absolute left-1/2 bottom-0 w-full h-1 bg-blue-500 transform -translate-x-1/2"></span>
        </h1>
        <p className="text-lg mt-2 font-semibold relative">
          Page Not Found
          <span className="block w-full h-0.5 bg-dotted border-t border-gray-500 mt-1"></span>
        </p>
        <Link
          to="/"
          className="mt-6 px-6 py-2 bg-blue-600 text-light rounded-md shadow-md hover:bg-blue-700 transition"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
