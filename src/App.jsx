import { useEffect, useMemo, useState } from 'react'
import Contact from "./pages/Contact";
import Career from "./pages/Career";
import Footer from "./components/Footer";


import { Route, Routes } from 'react-router-dom';

import './App.css'
import Navbar from './components/NavBar';
import Home from './pages/Home.jsx';
import Services from './components/Services.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import About from './pages/About.jsx';

const App = () => {
  return(
    <div>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Career />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path='/about' element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}


export default App
