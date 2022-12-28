import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import "./App.css";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col w-full bg-bunker-gray-800">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<About />} />
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
