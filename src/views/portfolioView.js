import React from 'react';
import nprogress from 'nprogress';
import {Layout, Carousel, Badge, Typography, Tooltip } from 'antd';
import UpdatePageTitle from '../components/UpdatePageTitle';
import HeaderBar from '../container/HeaderBar';
import {LockOutlined} from '@ant-design/icons';
import projectImg from '../assets/images/project-pics-sample.png';
// import IndividualPortfolioComponent from '../components/IndividualPortfolioComponent';
const { Content} = Layout;
const {Paragraph} = Typography;





class PortfolioView extends React.Component {
  state ={
    currentCaroselCount: 1
  }
    onChange = (a, b, c) =>{
     this.setState({currentCaroselCount : a +1})
    console.log(a, b, c);
  }
  
  componentDidMount(){
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
                    <div className="total-num">11</div>
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
                             <input type="text" readOnly value="www.trackytodo.netlify.app"/>
                            </Tooltip>

                             <Paragraph copyable={{text: 'www.tracky.netlify.app'}}></Paragraph>
                           </div>
                        </div>

                           <div className="project-container">
                              <div className="project-details">
                                <p className="project-name">Team work</p>
                                
                              </div>
                              <div className="project-picture">
                                <Tooltip placement='right' title="project picture">
                                  <img src={projectImg} width="100%" height="100%" alt="project name"/>
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
                             <LockOutlined />
                             <input type="text" title="project url" readOnly value="www.geo-search.com"/>
                             <Paragraph copyable={{text: 'www.geo-search.com'}}></Paragraph>
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
                             <input type="text" title="project url" readOnly value="www.trackytodo.netlify.app"/>
                             <Paragraph copyable={{text: 'www.tracky.netlify.app'}}></Paragraph>
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
                             <LockOutlined />
                             <input type="text" title="project url" readOnly value="www.geo-search.com"/>
                             <Paragraph copyable={{text: 'www.geo-search.com'}}></Paragraph>
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
                             <input type="text" title="project url" readOnly value="www.trackytodo.netlify.app"/>
                             <Paragraph copyable={{text: 'www.tracky.netlify.app'}}></Paragraph>
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
                             <LockOutlined />
                             <input type="text" title="project url" readOnly value="www.geo-search.com"/>
                             <Paragraph copyable={{text: 'www.geo-search.com'}}></Paragraph>
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