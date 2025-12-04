import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Contact from './Components/Contact';
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";




function App() {
  
  return (
   
    <div>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/Profile/:userId/:nom" element={<Profile/>}/>

     </Routes>
    </div>
  );
}
export default App;
