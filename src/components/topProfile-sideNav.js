import React from 'react';
import {Link} from 'react-router-dom';
import SocialButton from '../components/socialButton';
import backgroundImage from '../assets/images/left-bg.png';


const profile = (props) =>(
  <div>
     <img className="top-logo-bg" src={backgroundImage} alt="logo" />
        <div className="profile">
          <img src={props.profilePics} className="profile-pics" alt="profile pics" />
              <Link className="profile-name" to="/about">
                  Anani Oluwatobiloba
              </Link>
              <div className="sidenav-socialbtn" >
                <SocialButton/>
              </div>
        </div>
 </div>
)


export default profile;