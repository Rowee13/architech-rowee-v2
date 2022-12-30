import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyPlayground from "./pages/my-playground/MyPlayground";
import ReactCodesandbox from "./pages/my-playground/react-bootcamp/ReactCodesandbox";
import ReactBootcampProjects from "./pages/my-playground/react-bootcamp/ReactBootcampProjects";
import Blog from "./pages/blog/Blog";
import Resources from "./pages/resources/Resources";
import "./App.css";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col w-full bg-mainbg-image ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
        <Route path="/contact-me" element={<Contact />} />
        <Route path="/my-playground">
          <Route index element={<MyPlayground />} />
          <Route path="react-in-codesandbox" element={<ReactCodesandbox />} />
          <Route
            path="react-bootcamp-projects"
            element={<ReactBootcampProjects />}
          />
        </Route>
        <Route path="/blog" element={<Blog />} />
        <Route path="/resources" element={<Resources />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
