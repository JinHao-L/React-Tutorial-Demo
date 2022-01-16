import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="NavBar-Container">
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <nav>
        <Link to="about">Intro</Link>
      </nav>
      <nav>
        <Link to="experience">Experiences</Link>
      </nav>
      <nav>
        <Link to="project">Project</Link>
      </nav>
      <nav>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
};
