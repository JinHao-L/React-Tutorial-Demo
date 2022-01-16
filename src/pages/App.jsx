import { NavBar } from "../components/NavBar";
import Contact from "./Contact";
import Experiences from "./Experiences";
import { Home } from "./Home";
import Intro from "./Intro";
import Project from "./Projects";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Footer } from "../components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="App-Container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<Intro />} />
          <Route path="experience" element={<Experiences />} />
          <Route path="project" element={<Project />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
