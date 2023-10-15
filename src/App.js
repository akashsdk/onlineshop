import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Screen/Home";
import WrongPage from "./Screen/WrongPage";
import HomeHeader from "./Screen/HomeHeader";
import HomeFooter from "./Screen/HomeFooter";
import TopOffers from './Screen/TopOffers';
import Cart from './Screen/Cart';
import PreOrder from './Screen/PreOrder';
import Contacts from './Screen/Contacts';
import Account from './Screen/Account';

import AboutUs from "./OtherLink/AboutUs";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeHeader/>
        <Routes>
          <Route path="*" element={<WrongPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/My-Offers" element={<TopOffers/>} />
          <Route path="/My-Cart" element={<Cart/>} />
          <Route path="/Pre-Order" element={<PreOrder/>} />
          <Route path="/Contacts" element={<Contacts/>} />
          <Route path="/Account" element={<Account/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
        </Routes>
        <HomeFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
