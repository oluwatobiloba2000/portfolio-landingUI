import React from 'react';
import socialButtonObject from '../social-button-json';


const socialButtons = () => ( 
  <div className="social-button-container">{
      socialButtonObject ? socialButtonObject.map((social) => <a style={{
            fontSize: "20px",
            padding: "5px",
            color: social.color ? social.color : 'current',
            backgroundColor: social.backgroundColor ? social.backgroundColor : 'transparent'
          }}
        key = {
          social.name
        }
        href={`${social.link}`}

        rel = "noopener noreferrer"
        target = {"_blank"} > {
          social.icon
        } </a>) : 'none'} </div>
      )

export default socialButtons;