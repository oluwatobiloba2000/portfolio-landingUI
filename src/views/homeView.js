import React from 'react';
import {Link} from 'react-router-dom';
import nprogress from 'nprogress';
import {Layout} from 'antd';
// import {AntCloudOutlined} from '@ant-design/icons';
import SocialButton from '../components/socialButton';
import HeaderBar from '../container/HeaderBar';
import backgroundPics from '.././assets/images/lappy-sample.jpg';
import ReactGa from 'react-ga';
const {Content } = Layout;
// const axios = require('axios').default;



class HomeView extends React.Component {

  state = {
    username: '',
    backgroundPics: '',
    networkError: false
  }

   handleNetworkOk (){
    window.location.replace('/')
  }

  componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
    document.querySelector('.left-div').classList.add('full-width');
    nprogress.start();

    setTimeout(()=>{document.querySelector('.left-div').classList.remove('full-width');
    nprogress.done()}, 500);
    
      // axios.get('/api/profile')
      //   .then( (response) =>{
      //     // handle success
      //     this.setState({username : response.data.data[0].username, backgroundPics: response.data.data[0].backgroundpics})
      //     message.success('page Loaded', 0.5,  document.querySelector('.left-div').classList.remove('full-width'));
      //     nprogress.done();
      //   })
      //   .catch((error) =>{
      //     // handle error
      //     nprogress.done();
      //     message.error('Network Error, please check and try again', 9.0, this.setState({networkError: true})/*SHOW A MODAL TO RELOAD HERE */);
      //   })
    }
    
  
      componentWillUnmount(){
        document.querySelector('.left-div').classList.remove('full-width');
      }
  
  render(){
    // const { username ,  backgroundPics, networkError} = this.state;
    return(
      <div className="full-height">
        {/* <Modal
          closable={false}
          okText={'Reload'}
          title="Network Error"
          visible={networkError}
          onOk={this.handleNetworkOk}
        >
        <AntCloudOutlined style={{fontSize: 50}}/> Could not load All content properly, please reload
        </Modal> */}
       <Layout className="full-height">
        <Content style={{ height: `100%`, backgroundSize: "100% 100%" }}>
        <div className="homeview-content">
        <div className="left-div">
          <div className="top-logo">
            {'oluwatobiloba'}.<span>me</span>
          </div>

          <div className="left-div-body">
            <div className="greetings">Hello</div>
            <div className="name-bg">I'm {'Oluwatobiloba'}</div>
            <div className="text-md">Software Engineer</div>
            <Link to="/about">
              <button onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'user clicked to read about you from the homepage'
                    });
                   }} className="hire-btn">ABOUT ME</button>
            </Link>
          </div>

          <div className="social-home">
            <SocialButton onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'clicked on your social button from the homepage'
                    });
                   }}  />
          </div>
        </div>
       
        <div className="right-div">
          <div className="img-home-preview">
           <img style={{postion: "relative" ,width: "100%", height:"100%"}} src={backgroundPics} alt="background"/>
          </div>
          <div className="home-right-text">
          <p>Are you ready to create your next awsome project?</p>
          <Link to="/contact">
           <button onClick={()=>{ 
                     ReactGa.event({
                      category: 'User',
                      action: 'user clicked to hire you from the homepage'
                    });
                   }} className="hire-btn btn-home">HIRE ME</button>
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
        </div>
        </Content>
      
    </Layout>
  </div>
      )
  }
}

export default HomeView;