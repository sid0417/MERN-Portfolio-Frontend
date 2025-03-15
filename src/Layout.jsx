import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

function Layout() {
  const darkMode = useSelector((store) => store.theme.darkMode);
  return (
    <div
      className={`${
        darkMode ? "bg-dark-gradient text-light" : "bg-light-gradient text-dark"
      }`}
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
