import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import myimg from '../assets/img/Me-removebg-preview.png';
import Axios from 'axios';
import FileDownload from 'js-file-download';
import './About.css';

const About = () => {

   const download =(e)=>{
        e.preventDefault();

          Axios({
            url: 'http://localhost:4000/files',
            method: 'GET',
            responseType: "blob",
          }).then((res)=>{
            FileDownload(res.data,"MD-Mahmudul-Islam-CV.docx")
          })
   };
    return (
        <Container >
        {/* <h1 className="text-center mt-5 project">About</h1> */}
  <Row className="p-5 xs{12} mt-5">
    <Col className="text-start mt-5 p-3  xs={12}">
    <h1>Hello This Is <span className="name">Md Mahmudul Islam</span></h1>
    <p >I am a professional Full-stack Developer for past 2 years and a student of Bachelors in  Computer Science and Engineering.I am experience in Web design and development.I am also experience in React js and Node js. </p>
    <Button onClick={(e)=>download(e)} variant="success">Download Resume</Button>
    </Col>
    <Col className="text-center xs={12} p-2 ">
    <img src={myimg} alt="" />
    </Col>
  </Row>
 
</Container>
    );
};

export default About;