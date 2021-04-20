import React from 'react';
import {Layout, Typography, Skeleton, Tooltip} from 'antd';
import nprogress from 'nprogress';
import IndividualResumeComponent from '../components/IndividualResumeComponent';
import HeaderBar from '../container/HeaderBar';
import IndividualSkillsComponent from '../components/IndividualSkillsContainer';
import UpdatePageTitle from '../components/UpdatePageTitle';
import SocialButton from '../components/socialButton';
import { DownloadOutlined } from '@ant-design/icons';
import ReactGa from 'react-ga';
const { Paragraph } = Typography;
const { Content} = Layout;


class AboutView extends React.Component {
  state = {
    loading:false,
    name: '',
    cvLink: '',
    education: '',
    resume: '',
    hobbies: '',
    skills: ''
  };


  componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    this.setState({loading: true})
    document.getElementsByTagName('body')[0].classList.add('resume-page')
    nprogress.start();

    setTimeout(()=>{ nprogress.done(); this.setState({loading: false}) }, 500)
  }

  recordDownloadResume(){
    ReactGa.event({
      category: 'User',
      action: 'Viewed/download your resume'
    });
  }

  componentWillUnmount(){
    document.getElementsByTagName('body')[0].classList.remove('resume-page')
  }
  render(){
    // const { loadings } = this.state;
    return(
      <div className="full-height">
      <UpdatePageTitle title="Resume || Oluwatobiloba"/>
      <Layout className="resume-container full-height">
        <Content className="resume-content-container">
          <div className="resume-left-section">
            <div className="resume-left-box resume-name">
            <Skeleton active paragraph={{ rows: 1 }} loading={this.state.loading}>
              <span style={{fontSize: '25px', marginTop: '20px'}}>ANANI PAUL OLUWATOBILOBA</span> 
              <p>SOFTWARE ENGINEER</p>
            </Skeleton>
            </div>

            <div className="resume-left-box details">
            <Skeleton active paragraph={{ rows: 3 }} loading={this.state.loading}>
              <ul>
                <li>
                  <Paragraph copyable={{ text: 'ananioluwatobiloba2000@gmail.com' }}>
                   <a onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on your email address in your resume page'
                    });
                   }} target={"_blank"} rel="noopener noreferrer" href={"mailto:ananioluwatobiloba2000@gmail.com"}>ananioluwatobiloba2000@gmail.com</a>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph copyable={{text: 'https://www.linkedin.com/in/anani-oluwatobi/'}}>
                  <a onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on your linkedIn account in your resume page'
                    });
                   }}target={"_blank"} rel="noopener noreferrer" href={"https://www.linkedin.com/in/anani-oluwatobiloba-967728183/"}>Linkedin/me</a>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph copyable={{text: '   https://github.com/oluwatobiloba2000'}}>
                  <a onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on your github in your resume page'
                    });
                   }} target={"_blank"} rel="noopener noreferrer" href={"https://github.com/oluwatobiloba2000"}>Github/me</a>
                  </Paragraph>
                </li>
              </ul>
              </Skeleton>
            </div>

            <div className="resume-left-box description-text">
              <Skeleton active paragraph={{ rows: 1 }} loading={this.state.loading}>
               Enthusiastic software engineer eager to contribute to team success through hard work, attention to detail, and excellent organizational skills. I merge a passion for usability and user experience with technical knowledge 
               to create cool digital experiences.
              </Skeleton>
            </div>

            <div className="resume-left-box social">
              <SocialButton/>
            </div>
          </div>
          
          <div className="resume-right-section">
            <div className="top-right-section-box">
              <div>
                <h3 className="top-right-section-box-header">PROJECT</h3>

                 <div style={{fontSize: '11px', color: 'white'}} className="project">
                  <a target={"_blank"}  rel="noopener noreferrer" href={"https://sendit.netlify.app/"}>SendIt</a>
                   <p><a target={"_blank"} rel="noopener noreferrer" href={"https://github.com/oluwatobiloba2000/SendIT"}>- Github</a></p>
                  <p>
                  SendIt  is an application that brings courier service companies to one place, it helps users deliver parcels to different destinations. 
                  </p>
                  <h3 style={{color: 'white'}}>REACTJS | REDUX | NODE.JS | EXPRESS | POSTGRESQL | SOCKET.IO</h3>
                  <p>
                    ● Developed the backend API using Node.js, Express and Socket.io &nbsp;
                    ● Developed the frontend using ReactJs and Redux &nbsp;
                    ● Testing
                  </p>
                 </div>

              </div>
              <div>
                <h3 className="top-right-section-box-header">EMPLOYMENT HISTORY</h3>
                  <IndividualResumeComponent />
              </div>
            </div>

            
         

            <div className="bottom-right-section-box">

              <div className="education-and-hobbies-container">
                <div className="education-container">
                  <h3 className="top-right-section-box-header">Education</h3>

                  <ul style={{overflow: 'auto',height: '95px', width: '90%'}}>
                    <li>
                      <p className="education-title">Poise Nigeria</p>
                      <p className="education-location">Software development and Soft skills - 2020 – 2021</p>
                    </li>
                    <li>
                      <p className="education-title">High School Certificate</p>
                      <p className="education-location">Intellect companion classic college - 2016 - 2018</p>
                    </li>
                  </ul>
        
                </div>

                <div className="hobbies-container">
                <h3 className="top-right-section-box-header hobbies-headder">INTERESTS</h3>
             
                  <p className="hobbies-list">
                    Mostly interested in building automated systems for businesses using tech, love running, and road marathons.
                  </p>
 
                </div>
              </div>

              <div className="skills-container">
                <h3 className="top-right-section-box-header skills-header">SKILLS AND ABILITIES</h3>
                  <div className="skills-grid">
                   <IndividualSkillsComponent />
                 </div>

                   <a href="https://drive.google.com/file/d/1pnFG-23cQg_ngcKj1tAuineRZeguXIwf/view" onClick={this.recordDownloadResume} rel="noopener noreferrer" target = {"_blank"} > 
                    <Tooltip placement="left" title="Download CV">
                      <div className="download-resume-container">
                        <span style={{fontSize: '20px', marginRight: '5px'}}>Download</span>
                        <DownloadOutlined />
                      </div>
                    </Tooltip>
                   </a>
              </div>

            </div>
          </div>
        </Content>
      
           <div className="nav nav-about">
            <div className="handle-bar">
              <span className="handle-rotate handle-bar-span1"></span>
              <span className="handle-rotate handle-bar-span2"></span>
              <span className="handle-rotate handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="resume"/>
          </div>
        </Layout>
  </div>
      )
    }
  }

export default AboutView;