import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Conatct";
import Capabilities from "./Pages/Capabilities";
import Highlights from "./Pages/Highlights";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-charcoal text-white font-sans">
        <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/highlights" element={<Highlights />} />
          <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </div>
    </Router>
  );
}

export default App;
