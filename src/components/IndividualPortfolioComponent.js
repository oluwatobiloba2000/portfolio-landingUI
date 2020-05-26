import React from 'react';
import {Row ,Col, Button} from 'antd';
import {LinkOutlined} from '@ant-design/icons';
import image from '../assets/images/project-img.jpg';

const IndividualPortfolioComponent = () =>(
    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
      <Col className="portfolio-container gutter-row" span={6}>
          <img className="portfolio-image" src={image} alt="project"/>
          <p className="project-title">Tracky</p>
          <p className="project-text">
          Lorem ipsum dolor sit amet consectetur
         adipisicing elit. Magni error, debitis a eum mollitia sequi explicabo iste saepe dolor cupiditate impedit fugit rem minus
          </p>
            <Button icon={<LinkOutlined />} type="dashed">View site</Button>
      </Col>
   
    </Row>
)

export default IndividualPortfolioComponent;