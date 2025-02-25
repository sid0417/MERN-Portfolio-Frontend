import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './index.css'
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./store/store";
// import App from './App.jsx'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Skills from "./Components/Skills/Skills.jsx";
import Contact from "./Components/Contact/Contact.jsx";
import Work from "./Components/Work/Work.jsx";
import NotFound from "./Components/404/404.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {/* Pages with Header & Footer */}
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/work/:id" element={<Work />} />
      </Route>

      {/* 404 Page (Without Header & Footer) */}
      <Route path="*" element={<NotFound />} />
    </>
  )
);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <Provider store={store}>
    <RouterProvider router={router} />
    </Provider>
    
  </StrictMode>
);
