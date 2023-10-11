import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import {FloatButton} from 'antd'

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
      <FloatButton.BackTop />

    </BrowserRouter>
  );
}

export default App;
