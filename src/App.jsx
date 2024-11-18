import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/CPFooter";

// import { Route, Routes } from "react-router-dom";
// import Hero from "./components/Hero/Hero";
// import About from "./components/About/About";
// import Contact from "./components/Contacts/Contact";
// import CPProjects from "./components/Project/CPProject";

function App() {
  return (
    <>
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<div>Resume Section</div>} />
        <Route path="/projects" element={<CP_Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<div>Page Not Found</div>} />
      </Routes> */}
      <Footer />
    </>
  );
}

export default App;
