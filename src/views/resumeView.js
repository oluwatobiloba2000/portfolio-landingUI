import React from 'react';
import {Layout, Typography, Skeleton, Tooltip} from 'antd';
import nprogress from 'nprogress';
import IndividualResumeComponent from '../components/IndividualResumeComponent';
import HeaderBar from '../container/HeaderBar';
import IndividualSkillsComponent from '../components/IndividualSkillsContainer';
import UpdatePageTitle from '../components/UpdatePageTitle';
import SocialButton from '../components/socialButton';
import { DownloadOutlined } from '@ant-design/icons';
const { Paragraph } = Typography;
const { Content} = Layout;





class AboutView extends React.Component {
  state = {
    loading:false
  };

  // enterLoading = index => {
    // const newLoadings = [...this.state.loadings];
    // newLoadings[index] = true;
    // this.setState({
    //   loadings: newLoadings,
    // });
    // setTimeout(() => {
      // newLoadings[index] = false;
      // this.setState({ loadings: newLoadings });
    // }, 6000);
  // };
  componentDidMount(){
    this.setState({loading: true})
    document.getElementsByTagName('body')[0].classList.add('resume-page')
    nprogress.start();
    setTimeout(()=>{
      this.setState({loading: false})
     nprogress.done();
    }, 2000)
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
              Anani Oluwatobiloba
            </Skeleton>
            </div>

            <div className="resume-left-box details">
            <Skeleton active paragraph={{ rows: 3 }} loading={this.state.loading}>
                  {/* TODO: MAKE THE RIGHT TEXT COPYABLE USING ANT COPY UI*/}
                  {/* TODO: ADD REACT LINKFY HERE TO MAKE LINKS CLICKABLE*/}
              <ul>
                {/* <li>
                 <Paragraph copyable={{text: '+23408109263085'}}>+23408109263085</Paragraph>
                </li> */}
                <li>
                  <Paragraph copyable={{ text: 'ananioluwatobiloba2000@gmail.com' }}>
                   <a target={"_blank"} rel="noopener noreferrer" href={"mailto:ananioluwatobiloba2000@gmail.com"}>ananioluwatobiloba2000@gmail.com</a>
                  </Paragraph>
                </li>
                <li>
                  <Paragraph copyable={{text: 'www.oluwatobiloba.com'}}>www.oluwatobiloba.com</Paragraph>
                </li>
              </ul>
              </Skeleton>
            </div>

            <div className="resume-left-box description-text">
              <Skeleton active paragraph={{ rows: 1 }} loading={this.state.loading}>
                I'm a frontend & backend developer, I love solving coding problems.
              </Skeleton>
            </div>

            <div className="resume-left-box social">
              <SocialButton/>
            </div>
          </div>
          
          <div className="resume-right-section">
            <div className="top-right-section-box">
              <h3 className="top-right-section-box-header">Experience</h3>
                <IndividualResumeComponent />
            </div>

            <div className="bottom-right-section-box">

              <div className="education-and-hobbies-container">
                <div className="education-container">
                  <h3 className="top-right-section-box-header">Education</h3>
                  <Skeleton active paragraph={{ rows: 2 }} loading={this.state.loading} >
                  <ul>
                    <li>
                      <p className="education-title">Bachelor in computer science</p>
                      <p className="education-location">Graduated from Unilag in 2024</p>
                    </li>
                  </ul>
                  </Skeleton>
                </div>

                <div className="hobbies-container">
                <h3 className="top-right-section-box-header hobbies-headder">Hobbies</h3>
                <Skeleton active paragraph={{ rows: 1 }} loading={this.state.loading}>
                  <p className="hobbies-list">
                    Gaming, sporting, running, watching movies, reading documentation, cooking
                  </p>
                </Skeleton>
                </div>
              </div>

              <div className="skills-container">
                <h3 className="top-right-section-box-header skills-header">Skills</h3>
                  <div className="skills-grid">
                   <IndividualSkillsComponent />
                 </div>

                   <a href="www.cloudinaryportfolio.pdf" rel="noopener noreferrer" target = {"_blank"} > 
                    <Tooltip placement="left" title="download resume">
                      <div className="download-resume-container">
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