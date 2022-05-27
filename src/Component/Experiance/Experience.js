import React from 'react';
import './Experience.css';
import { Card, Col, Row } from 'react-bootstrap';

const Experience = () => {
    return (
        <div className='bg-color2'>
            <h1 className="mt-5 p-5 text-center text-white">My Experience</h1>
            <Row xs={1} md={2} className="g-4">
    <Col>
      <Card className="m-5 radius">
        <Card.Body>
          <Card.Title className="text-center p-2">Frontend Development</Card.Title>
          <Card.Text>
            <ul>
                <li>
                    HTML5
                </li>
                <li>
                    CSS3
                </li>
                <li>
                    JavaScript
                </li>
                <li>
                    Bootstrap
                </li>
                <li>
                    React Js
                </li>
                <li>
                    Material Ui
                </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col>
      <Card className="m-5 radius">
        <Card.Body>
          <Card.Title className="text-center p-2">Backend Development</Card.Title>
          <Card.Text>
          <ul>
                <li>
                    NODE JS
                </li>
                <li>
                    My Sql
                </li>
                <li>
                    Mongodb
                </li>
                <li>
                    Express Js
                </li>
                <li>
                    Python
                </li>
                <li>
                    PHP
                </li>
            </ul>
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
</Row>
            
        </div>
    );
};

export default Experience;