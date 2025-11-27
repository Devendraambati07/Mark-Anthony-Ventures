import { lazy, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import ScrollToTop from './component/ScrollToTop';

const Navbar=lazy(()=> import("./component/Navbar"));
const Footer = lazy(()=>import ("./component/Footer"));
const Home = lazy(()=>import("./pages/Home"));
const About =lazy(()=> import("./pages/About"));
const Services = lazy(()=> import ("./pages/Services"));
const Culture = lazy(()=> import ("./pages/Culture"));
const Career = lazy(()=>import ("./pages/Career"))
const NotFound= lazy(()=> import("./pages/NotFound"));


function App() {

  return (
<>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/culture" element={<Culture />} />
        <Route path="/careers" element={<Career />} />
        {/* 
        <Route path="/difference" element={<Difference />} />
        <Route path="/contact" element={<Contact />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
