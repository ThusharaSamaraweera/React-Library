import React from "react";
import {Twitter, Facebook, Instagram, Mail} from "react-feather";
import {Col, Container, Row} from "react-bootstrap";

const Footer: React.FC = () => {
    return (
        <div className="footer-dark">
            <footer>
                <Container className="container">
                    <Row className="row">
                        <Col className="sm-6 md-2 item">
                            <h3>Services</h3>
                            <ul>
                                <li><a href="www.softvasel.com">Web design</a></li>
                                <li><a href="www.softvasel.com">Development</a></li>
                                <li><a href="www.softvasel.com">Hosting</a></li>
                            </ul>
                        </Col>
                        <Col className="sm-6 md-2 item">
                            <h3>About</h3>
                            <ul>
                                <li><a href="www.softvasel.com">Web page</a></li>
                                <li><a href="www.instagram.com">Instagram</a></li>
                            </ul>
                        </Col>
                        <Col className="md-10 item text">
                            <h3>Web Team</h3>
                            <p>Praesent sed lobortis mi. Suspendisse vel placerat ligula. Vivamus ac sem lacus. Ut
                                vehicula rhoncus elementum. Etiam quis tristique lectus. Aliquam in arcu eget velit
                                pulvinar dictum vel in justo.</p>
                        </Col>
                    </Row>
                    <Row className="item-social">
                        <i><a href="www.facebook.com"> <Facebook/> </a></i>
                        <i><a href="www.twitter.com"> <Twitter/></a> </i>
                        <i><a href="www.instagram.com"> <Mail/></a> </i>
                        <i><a href="www.instagram.com"> <Instagram/></a> </i>
                    </Row>
                    <Row className="copyright">Web Team © 2021</Row>
                </Container>
            </footer>
        </div>
    )
}

export default Footer;