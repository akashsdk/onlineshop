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
import Checkout from "./Screen/Checkout";
import ProductCategory from "./Screen/ProductCategory";

import Accessories from './Catagory/Accessories';
import CableandOther from './Catagory/CableandOther';
import Camera from './Catagory/Camera';
import Computer from './Catagory/Computer';
import Headphones from './Catagory/Headphones';
import HubsDocks from './Catagory/HubsDocks';
import Keyboard from './Catagory/Keyboard';
import Mouse from './Catagory/Mouse';
import PhonesTablets from './Catagory/PhonesTablets';
import PowerAdapter from './Catagory/PowerAdapter';
import PowerBank from './Catagory/PowerBank';
import Speakers from './Catagory/Speakers';
import WirelessCharger from './Catagory/WirelessCharger';
import CoverGlass from './Catagory/CoverGlass';
import SmartWatch from './Catagory/SmartWatch';
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
          <Route path="/Checkout" element={<Checkout/>} />
          <Route path="/Category" element={<ProductCategory/>} />
          
          <Route path="/Category/Accessories" element={<Accessories/>} />
          <Route path="/Category/Cable-and-Interconnects" element={<CableandOther/>} />
          <Route path="/Category/Camera&Accessories" element={<Camera/>} />  
          <Route path="/Category/Computer-and-Laptop" element={<Computer/>} />  
          <Route path="/Category/Headphones" element={<Headphones/>} />  
          <Route path="/Category/Hubs-Docks" element={<HubsDocks/>} />  
          <Route path="/Category/Keyboard" element={<Keyboard/>} />  
          <Route path="/Category/Mouse" element={<Mouse/>} />  
          <Route path="/Category/Phones-Tablets" element={<PhonesTablets/>} />  
          <Route path="/Category/Power-Adapter" element={<PowerAdapter/>} />  
          <Route path="/Category/Speakers" element={<Speakers/>} />  
          <Route path="/Category/Wireless-Charger" element={<WirelessCharger/>} />
          <Route path="/Category/Cover&Glass" element={<CoverGlass/>} />
          <Route path="/Category/Smart-Watch" element={<SmartWatch/>} />
          <Route path="/Category/Power-Bank" element={<PowerBank/>} />

          <Route path="/AboutUs" element={<AboutUs/>} />

        </Routes>
        <HomeFooter/>
      </div>
    </BrowserRouter>
  );
}

export default App;
