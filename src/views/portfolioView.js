import React from 'react';
import nprogress from 'nprogress';
import {Layout, Carousel, Badge, Tooltip } from 'antd';
import UpdatePageTitle from '../components/UpdatePageTitle';
import HeaderBar from '../container/HeaderBar';
import {LockOutlined} from '@ant-design/icons';
import geoSearchImg from '../assets/images/geo-search.png';
import {GithubOutlined} from '@ant-design/icons';
import TrackerImg from '../assets/images/tracker-app.png';
import chatDesignImg from '../assets/images/css-chat-design.png';
import ReactGa from 'react-ga';
// import IndividualPortfolioComponent from '../components/IndividualPortfolioComponent';
const { Content} = Layout;
// const {Paragraph} = Typography;





class PortfolioView extends React.Component {
  state ={
    currentCaroselCount: 1
  }
    onChange = (a, b, c) =>{
     this.setState({currentCaroselCount : a +1})
  }
  
  componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    document.getElementsByTagName('body')[0].classList.add('portfolio-page')
    nprogress.start();
    setTimeout(()=>{
     nprogress.done();
    }, 2000)
  }
  
    componentWillUnmount(){
      document.getElementsByTagName('body')[0].classList.remove('portfolio-page')
    }

  render(){
    return(
      <div className="full-height">
      <UpdatePageTitle title="Oluwatobiloba || projects showcase"/>
      <Layout className="full-height">

            <Content className="portfolio-container">
            <div className="portfolio-wallpaper">
              <div className="portfolio-wallpaper-text">Portfolio
                 <p>Some of my selected works</p>
              </div>
              <div className="number-slides">
                <Tooltip placement="left" title="current project number">
                  <div className="current-num">
                    <Badge overflowCount={10000000000} count={this.state.currentCaroselCount}></Badge>
                  </div>
                </Tooltip>
                  <div className="portfolio-divider">Of</div>

                  <Tooltip placement="left" title="total number of projects">
                    <div className="total-num">3</div>
                  </Tooltip>
              </div>
             </div>
                 <Carousel effect="scrollx" className="carousel-track" afterChange={this.onChange}>
                    <div className="carousel-div">
                      <div className="display-tab">
                        <div className="head">
                          <div className="display-dots-container">
                            <span className="dots red"></span>
                            <span className="dots yellow"></span>
                            <span className="dots green"></span>
                          </div>
                           <div className="display-tab-input">
                             <LockOutlined/>
                            <Tooltip placement="topLeft" title="Project url">
                             <input type="text" readOnly value="https://maintenance-app-tracky.herokuapp.com/"/>
                            </Tooltip>
                           
                            <Tooltip placement="topRight" title="Github url">
                              <a className="project-github-link" href="https://github.com/oluwatobiloba2000/MAINTENANCE_TRACKER" rel="noopener noreferrer" target = {"_blank"} > 
                                <GithubOutlined />
                              </a>
                            </Tooltip>
                           </div>
                        </div>

                           <div className="project-container">
                            <div className="project-picture">
                              <p className="project-name">
                                <a href="https://maintenance-app-tracky.herokuapp.com/" rel="noopener noreferrer" target = {"_blank"} > 
                                   Maintenance Tracker App
                                 </a>
                                </p>
                                <Tooltip placement='right' title="Maintenance Tracker">
                                  <img src={TrackerImg} width="100%" height="95%" alt="Maintenance Tracker"/>
                                </Tooltip>
                              </div>
                           </div>

                      </div>
                    </div>

                    <div className="carousel-div">
                    <div className="display-tab">
                        <div className="head">
                          <div className="display-dots-container">
                            <span className="dots red"></span>
                            <span className="dots yellow"></span>
                            <span className="dots green"></span>
                          </div>
                           <div className="display-tab-input">
                             <LockOutlined/>
                            <Tooltip placement="topLeft" title="Project url">
                             <input type="text" readOnly value="https://geo-search.netlify.app/"/>
                            </Tooltip>

                            <a className="project-github-link" href="https://github.com/oluwatobiloba2000/geo-search" rel="noopener noreferrer" target = {"_blank"} > 
                              <GithubOutlined />
                            </a>
                           </div>
                        </div>

                           <div className="project-container">
                            <div className="project-picture">
                              <p className="project-name">
                                <a href="https://geo-search.netlify.app/" rel="noopener noreferrer" target = {"_blank"} > 
                                   Geo search App
                                 </a>
                                </p>
                                <Tooltip placement='right' title="Geo search App">
                                  <img src={geoSearchImg} width="100%" height="95%" alt="geo search app"/>
                                </Tooltip>
                              </div>
                           </div>

                      </div>
                    </div>

                    <div className="carousel-div">
                      <div className="display-tab">
                        <div className="head">
                          <div className="display-dots-container">
                            <span className="dots red"></span>
                            <span className="dots yellow"></span>
                            <span className="dots green"></span>
                          </div>
                           <div className="display-tab-input">
                             <LockOutlined/>
                            <Tooltip placement="topLeft" title="Project url">
                             <input type="text" readOnly value="https://oluwatobiloba2000.github.io/Chat-app-CSS-illustration/"/>
                            </Tooltip>

                            <a className="project-github-link" href="https://github.com/oluwatobiloba2000/Chat-app-CSS-illustration" rel="noopener noreferrer" target = {"_blank"} > 
                              <GithubOutlined />
                            </a>
                           </div>
                        </div>

                           <div className="project-container">
                            <div className="project-picture">
                              <p className="project-name">
                                <a href="https://oluwatobiloba2000.github.io/Chat-app-CSS-illustration/" rel="noopener noreferrer" target = {"_blank"} > 
                                  Chat app CSS illustration
                                 </a>
                                </p>
                                <Tooltip placement='right' title="css design">
                                  <img src={chatDesignImg} width="100%" height="95%" alt="Chat app CSS illustration"/>
                                </Tooltip>
                              </div>
                           </div>

                      </div>
                    </div>
                  </Carousel>

            </Content>

            <div className="nav nav-about">
            <div className="handle-bar">
              <span className="handle-rotate handle-bar-span1"></span>
              <span className="handle-rotate handle-bar-span2"></span>
              <span className="handle-rotate handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="portfolio"/>
          </div>
        </Layout>
  </div>
      )
    }
  }

export default PortfolioView;