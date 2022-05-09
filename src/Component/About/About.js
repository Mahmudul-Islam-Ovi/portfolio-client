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
    <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque magni, veritatis natus dignissimos rem ipsum sapiente ex, illo aliquam quis et similique voluptatibus a quia eveniet vero maxime omnis ad?</p>
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