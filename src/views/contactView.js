import React from 'react';
import nprogress from 'nprogress';
import {Layout ,Form, Input, Button, message ,Result, Modal} from 'antd';
import {SendOutlined, SmileOutlined} from '@ant-design/icons';
// import SocialButton from '../components/socialButton';
import UpdatePageTitle from '../components/UpdatePageTitle';
import HeaderBar from '../container/HeaderBar';
import svgImg from '../assets/images/flying_message_svg.svg';
import ReactGa from 'react-ga';
const { Content} = Layout;

const axios = require('axios').default;
axios.defaults.baseURL = 'https://tobby-email-api.herokuapp.com';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';



class ContactView extends React.Component {
  state = { 
    visible: false,
    loading: false,
    userCity: null,
    userCountry: null,
    userTimezone: null
  };

  formRef = React.createRef();

  async fetchUserDetails (){
    const responseForLocation = await fetch(`http://ip-api.com/json`, {
      method : "GET"
    })
    .then(res => res.json())
    .then(response => response)
    .catch(e => ()=> setTimeout(()=> this.fetchUserDetails(), 3000))
  
    const userCity = responseForLocation["city"];
    const userCountry = responseForLocation["country"];
    const userTimezone = responseForLocation["timezone"];
    if( responseForLocation["city"] && responseForLocation["country"] && responseForLocation["timezone"]){
      this.setState({userCity, userCountry, userTimezone})
    }
  }
  
  componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
    ReactGa.pageview(window.location.pathname + window.location.search);
    document.getElementsByTagName('body')[0].classList.add('contact-page')
    nprogress.start();
    setTimeout(()=>{
      nprogress.done();
    }, 2000)

    if(!this.state.userCity){
      this.fetchUserDetails();
    }
  }

  onReset = () => {
    this.formRef.current.resetFields();
  };

    // modal function
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  
  
  onFinish = values => {
      ReactGa.event({
       category: 'User',
       action: 'A user sent you a message'
     });
     
   this.setState({loading: true})

   const hide = message.loading('Sending your message to oluwatobiloba', 0);

      axios.post('/api/message/send', {
        name: values.name,
        source: 'message from your portfolio site',
        subject: values.subject,
        email: values.email,
        message: values.message,
        city: this.state.userCity,
        country: this.state.userCountry,
        timezone: this.state.userTimezone
      })
      .then( (response) =>{
        if(response.data.code === 200){
          // Dismiss manually and asynchronously
          setTimeout(hide, 100);
          this.onReset()
          message.success('Message sent', 1.9,  this.setState({visible: true, loading: false}));
          nprogress.done();
        }else{
          // Dismiss manually and asynchronously
          setTimeout(hide, 100);
          message.error('Message not sent', 1.9,  this.setState({loading: false}));
          nprogress.done();
        }
        })
        .catch((error) =>{
          // handle error
          setTimeout(hide, 200);
          nprogress.done();
          message.error('Network Error, please check and try again', 9.0, this.setState({loading: false}));
        })
 };
    componentWillUnmount(){
      document.getElementsByTagName('body')[0].classList.remove('contact-page')
    }

  render(){
    const {loading} = this.state;
    return(
      <div className="full-height">
      <Modal
          title="Email sent success"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
        <Result
            icon={<SmileOutlined style={{color: '#2283ed'}}/>}
            title="Thank you for sending me a message, I will reply as soon as possible"
          />
        </Modal>
      <UpdatePageTitle title="Oluwatobiloba || contact me"/>
      <Layout className="full-height">
            <Content className="contact-container">
                <div className="contact-wallpaper">
                    <div className="contact-wallpaper-text">Get In Touch
                    <p>I will reply as soon as possible</p>
                    </div>
                </div>

                <div className="contact-form-container">
                  <div className="form">
                  <div className="form-top-widjet">
                    <p>Send me a message</p>
                    <img  src={svgImg} alt="svg icon"/>
                  </div>
                   <Form ref={this.formRef} name="complex-form" onFinish={loading ? '' : this.onFinish} labelCol={{ span: 4 }} wrapperCol={{ span: 16 }}>
                     <Form.Item
                        name="email"
                        label="E-mail"
                        // hasFeedback
                        rules={[
                          {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                          },
                          {
                            required: true,
                            message: 'Please input your E-mail!',
                          },
                        ]}
                      >
                <Input />
              </Form.Item>
  
            <Form.Item name={'name'} hasFeedback label="Name" rules={[{ required: true }]}>
              <Input maxLength="50"/>
            </Form.Item>
          
            <Form.Item  name={['subject']} hasFeedback label="Subject" rules={[{ required: true }]}>
              <Input maxLength="50"/>
            </Form.Item>

            <Form.Item name={['message']} hasFeedback rules={[{ required: true }]} label="Message">
              <Input.TextArea maxLength="200" onResize={false}/>
           </Form.Item>

          <Form.Item  label=" " colon={false}>
            <div className="submit-btn-container">
            <Button type={loading ?'disabled' : 'primary'} htmlType="submit">
              <SendOutlined />
            </Button>
            </div>
           </Form.Item>
          </Form>
           {/* <SocialButton /> */}
           </div>
           </div>
          </Content>

            <div className="nav nav-about">
            <div className="handle-bar">
              <span className="handle-rotate handle-bar-span1"></span>
              <span className="handle-rotate handle-bar-span2"></span>
              <span className="handle-rotate handle-bar-span3"></span>
            </div>
           <HeaderBar className="home-nav-li" activeKey="contact"/>
          </div>
        </Layout>
  </div>
      )
    }
}

export default ContactView;