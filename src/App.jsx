import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from './pages/Cart';
import About from "./pages/About";

const App = () => {
 
  return (
  <div >
    <div className="fixed top-0 inset-x-0 bg-slate-900 text-white z-50">
      <Navbar/>
    </div>

    <div className="mt-[75px]">
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    </div>
    
  </div>)
};

export default App;
