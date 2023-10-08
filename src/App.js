import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import WrongPage from "./Screen/WrongPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
