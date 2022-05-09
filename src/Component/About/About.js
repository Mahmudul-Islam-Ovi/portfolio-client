import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import myimg from '../assets/img/Me-removebg-preview.png';
import './About.css'

const About = () => {
    return (
        <Container >
        {/* <h1 className="text-center mt-5 project">About</h1> */}
  <Row className="p-5 xs{12} mt-5">
    <Col className="text-start mt-5 p-3  xs={12}">
    <h1>Hello This Is <span className="name">Md Mahmudul Islam</span></h1>
    <p >Hi, This is Mahmudul Islam. I'm a computer science graduate and a professional web developer with over 2 years. I am experienced in React design. I have great skills in UI design and development. If you want quality work at a good price, don't hesitate to hire me. I can work with full responsibility for you. Thank You</p>
    <Button variant="success">Download Resume</Button>
    </Col>
    <Col className="text-center xs={12} p-2 ">
    <img src={myimg} alt="" />
    </Col>
  </Row>
 
</Container>
    );
};

export default About;