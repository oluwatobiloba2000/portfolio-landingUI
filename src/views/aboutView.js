import React from 'react';
import { Link} from 'react-router-dom';
import HeaderBar from '../container/HeaderBar';
import nprogress from 'nprogress';
import {SendOutlined} from '@ant-design/icons';
import ReactHtmlParser from 'react-html-parser';
import {Button, Layout} from 'antd';
import UpdatePageTitle from '../components/UpdatePageTitle';
import SocialButton from '../components/socialButton';
import profileImage from '.././assets/images/styletobby2.jpg';
import ReactGa from 'react-ga';
const { Content, Header} = Layout;
// const axios = require('axios').default;




class AboutView extends React.Component {
    state = {
      username : 'Oluwatobiloba',
      about: `Enthusiastic software engineer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills.
              I merge a passion for usability and user experience with technical knowledge to create cool digital experiences.`,
      // profileImage: '',
      loadingBody: false,
      // networkError: false
    }

  componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    document.querySelector('body').classList.add('about');
    // this.fetchData();
    setTimeout(()=>{
      nprogress.start();

      setTimeout(()=>{
         nprogress.done()
      }, 1000)
    })


  }


  // fetchData = () =>{
  //   nprogress.start();
  //   this.setState({loadingBody: true, networkError: false});
  
  //   axios.get('/api/profile')
  //   .then( (response) =>{
  //     // handle success
  //     this.setState({profileImage: response.data.data[0].profilepics, 
  //                    username : response.data.data[0].username,
  //                    about: response.data.data[0].about,
  //                    loadingBody: false, networkError: false})
  //     message.success('page Loaded', 0.5);
  //     nprogress.done();
  //   })
  //   .catch((error) =>{
  //     // handle error
  //     message.error('Network Error, please check and try again', 9.0, this.setState({loadingBody: false, networkError: true}));
  //   })
  // }

  componentWillUnmount(){
    document.querySelector('body').classList.remove('about');
  }
  render(){
    const {username, about} = this.state;
    return(
      <div className="full-height">
      {/* {networkError && <Alert message="Could not connect to the Internet" banner />} */}
       <UpdatePageTitle title="About Oluwatobiloba"/>
       <Layout className="full-height margin-right">
          <Header className="aboutme-header">
              <div className="top-nav">
               <div className="title">About me</div>
              </div>
          </Header>

            <Content style={{ margin: '24px 16px 0' }}>
           {/* <Spin spinning={loadingBody}> */}
                <div className="body">
                 <div className="profile-image">
                   <div><img src={profileImage} alt="profile"/></div>
                 </div>

                 <div className="about-content">
                   <div className="about-text">
                      <p className="about-design-name">{username && `Hi, I'm ${username}`}</p>
                        <p className="about-design-text">
                          {ReactHtmlParser(about)}
                        </p>
                  </div>
                  <Link className="about-link" style={{width: "fit-content"}} to="/contact">
                    <Button onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on hire you from the about page'
                    });
                   }} className="btn-about" type="default" style={{ width: "215px", borderRadius: "24px",  backgroundColor: "#001529", height: "37px", color: "white"}}>
                    <span>GET IN TOUCH <SendOutlined className="about-send-icon"/></span>
                    </Button>
                  </Link>

                  <SocialButton onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on your social button from the about page'
                    });
                   }}/>
                 </div>

                </div>
              {/* </Spin> */}
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
