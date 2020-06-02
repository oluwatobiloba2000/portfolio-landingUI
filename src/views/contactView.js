import React from 'react';
import nprogress from 'nprogress';
import {Layout ,Form, Input, Button } from 'antd';
import {SendOutlined} from '@ant-design/icons';
import SocialButton from '../components/socialButton';
import UpdatePageTitle from '../components/UpdatePageTitle';
import HeaderBar from '../container/HeaderBar';
import svgImg from '../assets/images/flying_message_svg.svg';
const { Content} = Layout;





 class ContactView extends React.Component {

  componentDidMount(){
    document.getElementsByTagName('body')[0].classList.add('contact-page')
    nprogress.start();
    setTimeout(()=>{
     nprogress.done();
    }, 2000)
  }  
  
  onFinish = values => {
   console.log('Received values of form: ', values);
 };
    componentWillUnmount(){
      document.getElementsByTagName('body')[0].classList.remove('contact-page')
    }

  render(){
    return(
      <div className="full-height">
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
                     <Form name="complex-form" onFinish={this.onFinish} labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
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
  
            <Form.Item name={['name']} hasFeedback label="Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          
            <Form.Item name={['subject']} hasFeedback label="Subject" rules={[{ required: true }]}>
              <Input />
            </Form.Item>

            <Form.Item name={['message']} hasFeedback rules={[{ required: true }]} label="Message">
              <Input.TextArea onResize={false}/>
           </Form.Item>

          <Form.Item  label=" " colon={false}>
            <div className="submit-btn-container">
            <Button type="primary" htmlType="submit">
              <SendOutlined />
            </Button>
            </div>
           </Form.Item>
          </Form>
           </div>
             <div className="contact-info">
               <h1>Contact info</h1>
                <p><a target={"_blank"} rel="noopener noreferrer" href={"mailto:ananioluwatobiloba2000@gmail.com"}>ananioluwatobiloba2000@gmail.com</a></p>
                <SocialButton />
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