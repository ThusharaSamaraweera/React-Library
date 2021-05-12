import React from "react";
import {Col, Image, Row} from "react-bootstrap";
import WelocmeImg from '../assets/images/WelcomeImg.jpg'

const  Welcome : React.FC = () => {
    return (
        <Row className='welcome-section'>
            <Col xs={12} className='text-center py-2'>
                <h1>My Library</h1>
            </Col>
            <Col xs={12}>
                <Image src={WelocmeImg} />
            </Col>
            <Col xs={12} className='img-credit pr-5 pt-2'>
                Photo by <a href="https://unsplash.com/@annahunko?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Anna Hunko</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                Unsplash</a>
            </Col>
        </Row>
    )
}

export default Welcome
