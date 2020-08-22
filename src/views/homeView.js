import React from 'react';
import {Link} from 'react-router-dom';
import nprogress from 'nprogress';
import {Layout} from 'antd';
// import {AntCloudOutlined} from '@ant-design/icons';
import SocialButton from '../components/socialButton';
import HeaderBar from '../container/HeaderBar';
// import backgroundPics from '.././assets/images/lappy-sample.jpg';
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
            <div className="name-bg">I'm Oluwatob<span style={{color: '#2283ed'}}>ilo</span>ba</div>
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
            <svg id="e07c9319-842b-449a-9f57-029d5804b779" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" width="95%" height="100%" viewBox="0 0 1168.75 684.51654"><title>oluwatobiloba portfolio</title><path d="M1056.375,363.74173a128,128,0,1,1,128-128A128.14509,128.14509,0,0,1,1056.375,363.74173Zm0-254a126,126,0,1,0,126,126A126.1428,126.1428,0,0,0,1056.375,109.74173Z" transform="translate(-15.625 -107.74173)" fill="#3f3d56"/><circle cx="1041.17934" cy="128.36733" r="64.27294" fill="#f2f2f2"/><rect x="64.2437" y="128.51654" width="981.17647" height="492.92437" fill="#3f3d56"/><rect x="339.90756" y="271.02074" width="367.94118" height="252.30252" opacity="0.1"/><circle cx="1129.14865" cy="38.0284" r="25.91651" fill="#2283ed"/><circle cx="93.44538" cy="147.20561" r="11.68067" fill="#2283ed"/><circle cx="129.65546" cy="147.20561" r="11.68067" fill="#2283ed"/><circle cx="165.86555" cy="147.20561" r="11.68067" fill="#2283ed"/><rect x="177.54622" y="311.90309" width="23.36134" height="23.36134" fill="#2283ed"/><rect x="888.89916" y="515.14679" width="23.36134" height="23.36134" fill="#fff"/><rect x="832.10399" y="465.19945" width="23.36134" height="23.36134" transform="translate(-127.75925 529.15786) rotate(-38.97687)" fill="#2283ed"/><polygon points="747.563 670.5 14.017 670.5 14.017 275.693 16.353 275.693 16.353 668.164 747.563 668.164 747.563 670.5" fill="#3f3d56"/><path d="M777.20483,792.25827a15.18488,15.18488,0,1,1,15.18488-15.18487A15.20245,15.20245,0,0,1,777.20483,792.25827Zm0-28.03361a12.84874,12.84874,0,1,0,12.84874,12.84874A12.86328,12.86328,0,0,0,777.20483,764.22466Z" transform="translate(-15.625 -107.74173)" fill="#3f3d56"/><path d="M30.80987,384.60281a15.18488,15.18488,0,1,1,15.18488-15.18488A15.20172,15.20172,0,0,1,30.80987,384.60281Zm0-28.03362a12.84874,12.84874,0,1,0,12.84874,12.84874A12.86328,12.86328,0,0,0,30.80987,356.56919Z" transform="translate(-15.625 -107.74173)" fill="#3f3d56"/><path d="M250.40651,699.981l-10.43083,29.20168H216.53256V699.39693c1.72872-37.36646,22.69554-54.93424,23.34966-55.47151-15.75722,15.1965-14.00512,67.73621-14.00512,67.73621,10.51261-45.55462,19.85714-46.72269,19.85714-46.72269-5.65347,8.4918-8.57364,47.11979-8.74881,49.526C237.68624,706.34694,250.40651,699.981,250.40651,699.981Z" transform="translate(-15.625 -107.74173)" fill="#f2f2f2"/><path d="M975.77626,703.95234v25.2303H957.753l-8.84228-24.77473S958.99114,709.454,959.55179,715.89c-.14016-1.98573-2.45291-32.54234-6.93832-39.27042,0,0,7.41727.92275,15.75721,37.05106,0,0,1.37838-41.66494-11.10826-53.7194C957.788,660.38345,974.40964,674.30679,975.77626,703.95234Z" transform="translate(-15.625 -107.74173)" fill="#f2f2f2"/><path d="M660.34,631.06H631.93l-.19-2.33-2.07-25.97v-.01l-2.15-27,13.11-55.69,11.14,11.14V584.27s6.55,9.83,5.24,12.45-2.62,2.62-1.31,4.58c1.31,1.97,2.62,3.28,1.31,4.59a4.92,4.92,0,0,0,0,5.9c1.31,1.31,3.93,3.27,1.96,5.24-1.96,1.96-4.58.65-1.96,7.86a23.00135,23.00135,0,0,0,1.8,3.84A25.502,25.502,0,0,0,660.34,631.06Z" transform="translate(-15.625 -107.74173)" fill="#d0cde1"/><polygon points="557.189 343.847 553.258 383.159 593.225 389.056 596.173 366.452 599.122 343.847 557.189 343.847" fill="#ffb9b9"/><polygon points="557.189 343.847 553.258 383.159 593.225 389.056 596.173 366.452 599.122 343.847 557.189 343.847" opacity="0.1"/><circle cx="579.13804" cy="325.17394" r="31.44965" fill="#ffb9b9"/><path d="M515.29,631.06c-.11-.23-.23-.47-.35-.73-.23-.49-.48-1.02-.75-1.6-1.74-3.88-3.87-9.4-2.64-11.05,1.97-2.62,2.62-5.24,1.31-6.55s-5.24,1.31-1.31-1.97c3.93-3.27,5.24-1.31,3.93-5.24s-3.93-1.96-1.31-3.93c2.62-1.96,4.59-1.31,3.28-3.27-1.31-1.97-3.93-1.97-1.31-3.28s4.59,0,3.93-3.28c-.66-3.27-1.31-1.96,0-3.27.34-.34,1.53-3.64,3.12-8.35,4.45-13.31,11.95-37.86,11.95-38.83,0-1.31-10.48-42.58-10.48-42.58l-4.59-2.63s-20.31,13.76-26.86,44.56c-6.56,30.79-11.14,38.66-11.14,38.66s-6.55,1.31-1.97,5.89c4.59,4.59,4.59,3.93.66,6.55s-6.55-2.62-3.93,2.62c2.62,5.25,5.89,3.94,3.27,7.21-2.62,3.28-7.2,3.28-4.58,5.9s-2.62,8.52.65,11.14c3.28,2.62,4.59,3.27,4.59,7.86a24.2678,24.2678,0,0,0,.31,3.84,19.59679,19.59679,0,0,0,.48,2.33c.15.61.3,1.07.4,1.36Z" transform="translate(-15.625 -107.74173)" fill="#d0cde1"/><polygon points="499.665 523.318 502.335 523.318 502.475 522.388 499.315 522.588 487.825 523.318 466.325 524.678 499.665 523.318" fill="#3f3d56"/><path d="M529.24,603.27l-5.89-20.31-.16-4.42-3.12-84.04,38.66-13.75L565.28,475.5s1.31-15.07,3.28-16.38c.71-.47,1.85.08,3.36,1.36,2.65,2.25,6.45,6.74,11.05,11.75,7.21,7.86,22.28,6.55,26.86005,3.93a15.46778,15.46778,0,0,1,1.83-.91c3.29-1.36,4.72-.4,4.72-.4,3.28,2.62-4.58,11.14-4.58,11.14s2.62,5.89,19.65,11.79c17.04,5.9,20.32,33.42,20.32,33.42s-20.32,55.03-19.66,58.96c.56,3.37-1.76,10.59-2.44,12.59v.01c-.11.32-.18.51-.18.51l1.49,25.46.14,2.33H532.01a13.47767,13.47767,0,0,0-1.11-2.33c-.11-.18-.23-.37-.35-.56C524.66,618.99,529.24,603.27,529.24,603.27Z" transform="translate(-15.625 -107.74173)" fill="#d0cde1"/><path d="M563.09532,436.94441s-3.26589-4.89882-2.00978-10.17448a30.83664,30.83664,0,0,0,.87928-9.16959s2.63783-8.54154,5.27565-13.31475,1.38172-6.783,9.672-8.29032,4.89882-12.30986,26.75511-.62805a6.40974,6.40974,0,0,0,6.65737,2.51222c4.522-.87928,6.15494,5.40126,6.15494,5.40126s3.01466-1.75855,4.14515.75367,9.19122-1.50778,9.19122,15.44968-9.17281,32.10485-9.17281,32.10485.67245-28.52449-14.27524-31.41354-31.02588-11.305-34.91981-.50244A82.35048,82.35048,0,0,1,563.09532,436.94441Z" transform="translate(-15.625 -107.74173)" fill="#2f2e41"/><ellipse cx="605.34609" cy="332.05355" rx="2.9484" ry="3.93121" fill="#ffb9b9"/><path d="M355.53,360.07V631.06H785.38V360.07ZM783.05,628.73H357.87V362.41H783.05Z" transform="translate(-15.625 -107.74173)" fill="#fff"/></svg>
           {/* <img style={{postion: "relative" ,width: "100%", height:"100%"}} src={backgroundPics} alt="background"/> */}
          </div>
          <div className="home-right-text">
          <p>Are you ready to create your next awesome project?</p>
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