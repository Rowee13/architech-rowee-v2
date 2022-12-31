import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  Home,
  About,
  Contact,
  MyPlayground,
  ReactCodesandbox,
  ReactBootcampProjects,
  Projects,
  Blog,
  Resources,
} from "./pages";
import "./App.css";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col w-full bg-mainbg-image">
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
        <Route path="/projects" element={<Projects />} />
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
