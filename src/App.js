import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import WrongPage from "./Screen/WrongPage";
import HomeHeader from "./Screen/HomeHeader";
import HomeFooter from "./Screen/HomeFooter";

import AboutUs from "./OtherLink/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeHeader/>
        <Routes>
          <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
        <HomeFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
