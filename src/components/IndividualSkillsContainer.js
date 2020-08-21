import React from 'react';
import NodeImg from '../assets/images/node-logo.png'
import reactimg from '../assets/images/react-logo.png'
import reduximg from '../assets/images/redux-logo.png';
import postgresimg from '../assets/images/postgres-logo.png';
import expressimg from '../assets/images/express-logo.png';

const IndividualSkillsComponent = () =>(
    <>
      <a rel = "noopener noreferrer" target={"_blank"} href="https://dropbox.com" className="skills-box">
        <img src={NodeImg} className="skills-box-img" alt="node"/>
        <div className="skills-box-text">Node</div>
      </a>
      <a rel="noopener noreferrer" target={"_blank"} href="https://dropbox.com" className="skills-box">
        <img src={reactimg} className="skills-box-img" alt="react"/>
        <div className="skills-box-text">React</div>
      </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://firefox.com" className="skills-box">
            <img src={reduximg} className="skills-box-img" alt="redux"/>
            <div className="skills-box-text">Redux</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://firefox.com" className="skills-box">
            <img src={postgresimg} className="skills-box-img" alt="postgres"/>
            <div className="skills-box-text">POSTGRESQL</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://js.com" className="skills-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" className="skills-box-img" alt="Firefox"/>
            <div className="skills-box-text">Javascript</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://js.com" className="skills-box">
            <img src={expressimg} className="skills-box-img" alt="express"/>
            <div className="skills-box-text">Express</div>
        </a>
    </>

)

export default IndividualSkillsComponent;