
import React from 'react';
import { Card ,Button, Container, Row, Col } from 'react-bootstrap';
import './Project.css'

const Project = () => {
    return (
        <div className="bg2">
        <div className='container  '>
            <h1 className="text-center mto project">Project</h1>
            <Container  >
                <Row className = 'mt-5 ' >
                    <Col className='mt-2 p-3'>
                    <Card style={{ width: '18rem'}} className='effect'>
                    <Card.Img  src="https://wallpaperaccess.com/full/796847.jpg" />
                 <Card.Body>
                    <Card.Title>Project-1</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary">Show Project</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className='mt-2 p-3 '>
                    <Card style={{ width: '18rem'}}  className='effect'>
                    <Card.Img variant="top" src="https://wallpaperaccess.com/full/796847.jpg" />
                 <Card.Body>
                    <Card.Title>Project-2</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary">Show Project</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className='mt-2 p-3'>
                    <Card  style={{ width: '18rem'}} className='effect'>
                    <Card.Img variant="top" src="https://wallpaperaccess.com/full/796847.jpg" />
                 <Card.Body>
                    <Card.Title>Project-3</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary">Show Project</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col className='mt-2 p-3'>
                    <Card style={{ width: '18rem'}} className='effect'>
                    <Card.Img variant="top" src="https://wallpaperaccess.com/full/796847.jpg" />
                 <Card.Body>
                    <Card.Title>Project-1</Card.Title>
                     <Card.Text>
                     Some quick example text to build on the card title and make up the bulk of
                     the card's content.
                     </Card.Text>
                    <Button variant="primary">Show Project</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
            </div>
      
        </div>
    );
};

export default Project;