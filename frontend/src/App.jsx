import React from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer";

import Navbar from "./components/Navbar";
import Skills from "./pages/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      
      <Home />
      <Skills />
      <Footer/>
    </>
  );
};

export default App;
