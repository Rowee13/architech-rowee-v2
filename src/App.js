import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import "./App.css";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col w-full bg-bunker-gray-700">
      <Routes>
        <Route path="/" element={<Home />} />
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
