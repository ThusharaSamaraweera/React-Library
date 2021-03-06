import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import WelcomeImage from '../assets/images/ezgif.com-gif-maker.webp';
import MenuNav from "./MenuNav";

const Welcome: React.FC = () => {
  return (
    <Row className='welcome-section'>
      <Col xs={12} className='py-2'>
        <Row>
          <Col xs={5} className='title'>
            <h1>My Library</h1>
          </Col>
          <Col xs={7} className='menu'>
            <MenuNav/>
          </Col>
        </Row>
      </Col>
      <Col xs={12} className='welcome-image px-0'>
        <Image src={WelcomeImage} alt='library photo'/>
      </Col>
      <Col xs={12} className='img-credit'>
        Photo by
        <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
           target='_blank'
        > Anna Hunko</a> on
        <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
           target='_blank'
        > Unsplash</a>
      </Col>
    </Row>
  )


};

export default Welcome;