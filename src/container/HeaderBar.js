import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import ReactGa from 'react-ga';

class HeaderBar extends React.Component {
   componentDidMount(){
    ReactGa.initialize('UA-151160030-1');
   }

  homeOnclickHandler(){
    ReactGa.event({
      category: 'Button',
      action: `Clicked on home button from "${window.location.pathname}" page`
    })
  }

  aboutOnclickHandler(){
    ReactGa.event({
      category: 'Button',
      action: `Clicked on about button from "${window.location.pathname}" page`
    })
  }

  resumeOnclickHandler(){
    ReactGa.event({
      category: 'Button',
      action: `Clicked on resume button from "${window.location.pathname}" page`
    })
  }

  portfolioOnclickHandler(){
    ReactGa.event({
      category: 'Button',
      action: `Clicked on portfolio button from "${window.location.pathname}" page`
    })
  }

  contactOnclickHandler(){
    ReactGa.event({
      category: 'Button',
      action: `Clicked on contact me button from "${window.location.pathname}" page`
    })
  }
  render(){
    return(
      <div className="side-nav-container">
      <Menu className="sidebar-nav-ul" theme="dark" mode="inline" defaultSelectedKeys={[this.props.activeKey]}>
          <Menu.Item onClick={this.homeOnclickHandler} className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="home">
              <Link to="/">
                Home
              </Link>
          </Menu.Item>
          <Menu.Item onClick={this.aboutOnclickHandler} className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="about">
              <Link to="/about">
                About
              </Link>
          </Menu.Item>
          <Menu.Item onClick={this.resumeOnclickHandler} className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="resume">
              <Link to="/resume">
                Resume
              </Link>
          </Menu.Item>
          <Menu.Item onClick={this.portfolioOnclickHandler} className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="portfolio">
              <Link to="/portfolio">
                Portfolio
              </Link>
          </Menu.Item>
          {/* <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="blog">
              <Link to="/blog">
                Blog
              </Link>
          </Menu.Item> */}
          <Menu.Item onClick={this.contactOnclickHandler} className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="contact">
              <Link to="/contact">
                Contact
              </Link>
          </Menu.Item>
      </Menu>
      </div>
      )
  }
}


export default HeaderBar;