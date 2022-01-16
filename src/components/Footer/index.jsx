import "./Footer.css";
import { FaGithubAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <div className="Footer-Container">
      <p>© Copyright {new Date().getFullYear()}</p>
      <div>
        <a href="www.google.com">
        <FaGithubAlt size="30"/></a>
      </div>
    </div>
  );
};
