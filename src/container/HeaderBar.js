import React from 'react';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';

class HeaderBar extends React.Component {
  render(){
    return(
      <div className="side-nav-container">
      <Menu className="sidebar-nav-ul" theme="dark" mode="inline" defaultSelectedKeys={[this.props.activeKey]}>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="home">
              <Link to="/">
                Home
              </Link>
          </Menu.Item>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="about">
              <Link to="/about">
                About
              </Link>
          </Menu.Item>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="resume">
              <Link to="/resume">
                Resume
              </Link>
          </Menu.Item>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="portfolio">
              <Link to="/portfolio">
                Portfolio
              </Link>
          </Menu.Item>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="blog">
              <Link to="/blog">
                Blog
              </Link>
          </Menu.Item>
          <Menu.Item className={this.props.className ? `${this.props.className} sidebar-nav-li` : "sidebar-nav-li"} key="contact">
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