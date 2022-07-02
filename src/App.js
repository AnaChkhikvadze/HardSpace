import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/hero";
import About from "./Apps/About/about"
import Destinations from "./Apps/Destinations/Destinations";
import Blogs from "./Apps/Blogs/Blogs";
import Slideshow from './components/Slideshow/Slidershow'
import Footer from "./components/Footer/footer";
import FAQ from "./Apps/FAQ/faq"
import Contact from "./Apps/ContactUs/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element=
            {
              <>
                <Hero />
                <Slideshow />
              </>
            }
          />

          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/Destinations" element={<Destinations />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
