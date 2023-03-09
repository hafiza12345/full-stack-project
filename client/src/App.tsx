import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Wrapper } from "./Components/Layout";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Virus from "./Pages/Virus";
import Bacteria from "./Pages/Bacteria";
import Fungi from "./Pages/Fungi";
import Animal from "./Pages/Animal";
import Plants from "./Pages/Plants";
import Protist from "./Pages/Protist";
import LinkOpen from "./Pages/LinkOpen";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { useMediaQuery } from "react-responsive";
const App = () => {
  const location = useLocation();
  const [path, setPath] = useState("");
  const isResponsive = useMediaQuery({ query: "(max-width: 487px)" });
  useEffect(() => {
    setPath(location.pathname);
  }, [path]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
       <Route path="/services" element={<Services />} /> 
        <Route path="/contact" element={<Contact />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/bacteria" element={<Bacteria />} />
        <Route path="/virus" element={<Virus />} />
        <Route path="/fungi" element={<Fungi />} />
        <Route path="/animals" element={<Animal />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/protist" element={<Protist />} />

        <Route path="/bacteria/*" element={<LinkOpen />} />
        <Route path="/virus/*" element={<LinkOpen />} />
        <Route path="/fungi/*" element={<LinkOpen />} />
        <Route path="/animals/*" element={<LinkOpen />} />
        <Route path="/plants/*" element={<LinkOpen />} />
        <Route path="/protist/*" element={<LinkOpen />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
