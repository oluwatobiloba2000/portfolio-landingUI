import React from 'react';
import {Link} from 'react-router-dom';
import nprogress from 'nprogress';
import {Layout} from 'antd';
// import HomeSvg from '../assets/images/Oreti.svg';
// import HomeSvgDev from '../assets/images/dev_svg.svg';
import img from '../assets/images/lappy-sample.jpg';
import SocialButton from '../components/socialButton';
import HeaderBar from '../container/HeaderBar';
const {Content } = Layout;



// const isBrowserTabFocused = () => !document.hidden;
// setInterval(()=>{
//   console.log(isBrowserTabFocused());
// },1000)
class HomeView extends React.Component {
  componentDidMount(){
    document.querySelector('.left-div').classList.add('full-width');
    nprogress.start();
    setTimeout(()=>{
      document.querySelector('.left-div').classList.remove('full-width');
    }, 1000)
    setTimeout(()=>{
      nprogress.done();
    }, 2000)
  }
  
  render(){
    return(
      <div className="full-height">
       <Layout className="full-height">
        {/* <Header>
          <HeaderBar />
          </Header> */}
        <Content style={{ height: `100%`, backgroundSize: "100% 100%" }}>
        <div className="homeview-content">
         {/* <img className="homeview-svg-pattern" src={HomeSvg} alt="pattern design"/> */}
         {/* <img className="homeview-svg-2" src={HomeSvgDev} alt="pattern design"/> */}

        <div className="left-div">
          <div className="top-logo">
            oluwatobi.<span>me</span>
          </div>

          <div className="left-div-body">
            <div className="greetings">Hello</div>
            <div className="name-bg">I'm Oluwatobiloba</div>
            <div className="text-md">A Fontend & Backend Developer</div>
            <Link to="/about">
              <button className="hire-btn">ABOUT ME</button>
            </Link>
          </div>

          <div className="social-home">
            <SocialButton />
          </div>
        </div>
       
        <div className="right-div">
          <div className="img-home-preview">
           <img style={{postion: "relative" ,width: "100%", height:"100%"}} src={img} alt="developer typing"/>
          </div>
          <div className="home-right-text">
          <p>Are you ready to create your next awsome project?</p>
          <Link to="/contact">
           <button className="hire-btn btn-home">HIRE ME</button>
          </Link>
          </div>
        </div>
          <div className="nav">
            <div className="handle-bar">
              <span className="handle-bar-span1"></span>
              <span className="handle-bar-span2"></span>
              <span className="handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="home"/>
          </div>
          {/* <div className="social-media-container"> */}
            {/* <span className="social-media-strokeup"></span>
            <span className="social-text-1">Reach Out</span>
            <span className="social-text-2">To Me</span>
            <span className="social-media-strokeleft"></span> */}

          {/* </div> */}
        </div>
        </Content>
      
    </Layout>
  </div>
      )
  }
}

export default HomeView;