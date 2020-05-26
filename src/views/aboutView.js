import React from 'react';
import { Link} from 'react-router-dom';
import HeaderBar from '../container/HeaderBar';
import nprogress from 'nprogress';
import {SendOutlined} from '@ant-design/icons'
import {Button, Layout} from 'antd';
import UpdatePageTitle from '../components/UpdatePageTitle';
import SocialButton from '../components/socialButton';
import myImage from '../assets/images/styletobby2.jpg';
const { Content, Header} = Layout;





class AboutView extends React.Component {
  componentDidMount(){
    document.querySelector('body').classList.add('about');
    nprogress.start();
    setTimeout(()=>{
     nprogress.done();
    }, 2000)
  }
 
  componentWillUnmount(){
    document.querySelector('body').classList.remove('about');
    console.log('remove about class')
  }
  render(){
    return(
      <div className="full-height">
     
      <UpdatePageTitle title="About Oluwatobiloba"/>
      <Layout className="full-height margin-right">
          <Header className="aboutme-header">
              <div className="top-nav">
               <div className="title">About me</div>
              </div>
          </Header>

            <Content style={{ margin: '24px 16px 0' }}>
                <div className="body">
                 <div className="profile-image">
                   <div>
                     <img src={myImage} alt="profile"/>
                   </div>
                 </div>

                 <div className="about-content">
                   <div className="about-text">
                     <p className="about-design-name">Hi, I'm Oluwatobiloba</p>
                     <p className="about-design-text">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni error, debitis a eum mollitia sequi explicabo iste saepe dolor cupiditate impedit fugit rem minus, distinctio praesentium et ut nostrum sint.
                   </p>
                  </div>
                  <Link className="about-link" to="/contact">
                    <Button className="btn-about" type="default" style={{ width: "215px", borderRadius: "24px",  backgroundColor: "#001529", height: "37px", color: "white"}}>
                    <span>GET IN TOUCH <SendOutlined className="about-send-icon"/></span>
                    </Button>
                  </Link>

                 
              <SocialButton/>
          
          
                 </div>
                </div>
                  <div className="nav nav-about">
            <div className="handle-bar">
              <span className="handle-rotate handle-bar-span1"></span>
              <span className="handle-rotate handle-bar-span2"></span>
              <span className="handle-rotate handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="about"/>
          </div>

            </Content>
        
        </Layout>
  </div>
      )
    }
  }
  
export default AboutView;