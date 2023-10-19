import {  Routes, Route } from "react-router-dom";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Gynocology from "./components/Gynocology";
import Hero from "./components/Hero";
import Jprofile from "./components/Jprofile";
import Nav from "./components/Nav";
import Physiotherapy from "./components/Physiotherapy";
import Rprofile from "./components/Rprofile";
import Sonography from "./components/Sonography";
import Trauma from "./components/Trauma";





function App() {
  return (
    
    <>
      <Nav/>
         <Routes >
         <Route  path="/" element={<Hero/>} />
         <Route  path="/trauma" element={<Trauma />} />
         <Route  path="/physiotherapy" element={<Physiotherapy />} />
         <Route  path="/sonography" element={<Sonography />} />
         <Route  path="/gynocology" element={<Gynocology />} />
         <Route  path="/Rprofile" element={<Rprofile />} />
         <Route  path="/Jprofile" element={<Jprofile />} />
         <Route  path="/gallery" element={<Gallery />} />
         <Route  path="/contact" element={<Contact />} />
         <Route  path="/appointment" element={<Appointment />} />

       </Routes>
     
      <Footer/>
    </>
    
  );
}

export default App;
