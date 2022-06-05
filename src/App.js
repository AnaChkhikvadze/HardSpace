import React from "react";
import "./index.css";
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/hero/hero";
import Slideshow from './components/Slideshow/Slidershow'
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
       <Navbar />
       <Hero />
       <Slideshow />
       <Footer />
    </div>
  );
}

export default App;
