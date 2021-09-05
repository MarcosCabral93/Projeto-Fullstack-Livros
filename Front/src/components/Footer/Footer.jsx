import React from "react";
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github.png";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <a href="https://github.com/MarcosCabral93" rel="noreferrer" target="_blank" >
        <img className="social" src={github} alt="Github" />
      </a>
      <a href="https://www.linkedin.com/in/marcos-cabral93/" rel="noreferrer" target="_blank" >
        <img className="social" src={linkedin} alt="Linkedin" />
      </a>
    </footer>
  );
}

export default Footer;
