import React from 'react';
import NodeImg from '../assets/images/node-logo.png'
import reactimg from '../assets/images/react-logo.png'
import reduximg from '../assets/images/redux-logo.png';
import postgresimg from '../assets/images/postgres-logo.png';
import expressimg from '../assets/images/express-logo.png';

const IndividualSkillsComponent = () =>(
    <>
      <a rel = "noopener noreferrer" target={"_blank"} href="https://nodejs.org" className="skills-box">
        <img src={NodeImg} className="skills-box-img" alt="nodejs"/>
        <div className="skills-box-text">Node</div>
      </a>
      <a rel="noopener noreferrer" target={"_blank"} href="https://reactjs.org" className="skills-box">
        <img src={reactimg} className="skills-box-img" alt="react"/>
        <div className="skills-box-text">React</div>
      </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://redux.js.org" className="skills-box">
            <img src={reduximg} className="skills-box-img" alt="redux"/>
            <div className="skills-box-text">Redux</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://postgresql.org" className="skills-box">
            <img src={postgresimg} className="skills-box-img" alt="postgres"/>
            <div className="skills-box-text">POSTGRESQL</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://en.wikipedia.org/wiki/JavaScript" className="skills-box">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" className="skills-box-img" alt="Firefox"/>
            <div className="skills-box-text">Javascript</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://express.com" className="skills-box">
            <img src={expressimg} className="skills-box-img" alt="express"/>
            <div className="skills-box-text">Express</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="http://socket.io/" className="skills-box">
            <img src={'https://img.stackshare.io/service/1161/vI0ZZlhZ_400x400.png'} className="skills-box-img" alt="socket.io"/>
            <div className="skills-box-text">Socket.io</div>
        </a>
        <a rel="noopener noreferrer" target={"_blank"} href="https://www.heroku.com/" className="skills-box">
            <img src={'https://img.stackshare.io/service/133/3wgIDj3j.png'} className="skills-box-img" alt="heroku"/>
            <div className="skills-box-text">heroku</div>
        </a>
    </>

)

export default IndividualSkillsComponent;