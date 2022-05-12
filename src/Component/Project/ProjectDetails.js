import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
// import { Grid } from '@mui/material';
import './Project.css';


const ProjectDetails = ({projectdetails}) => {

    const {projectName,projectDescription,projectLink,image} = projectdetails;
    return (
                // <Grid item xs={12} sm={6} md={4}>
                // <img width='150px' src={`data:image/jpeg;base64,${image}`} alt='not found'></img>
                //  <h3>{projectName}</h3>
                //  <h4>{projectDescription}</h4>
                
                // </Grid>
                <Container  >
                <Row className = 'mt-5 ' >
                    <Col className='mt-2 p-3'>
                    <Card style={{ width: '15rem'}} className='effect'>
                    <Card.Img  src={`data:image/jpeg;base64,${image}`}/>
                 <Card.Body className='bg-secondary' >
                    <Card.Title>{projectName}</Card.Title>
                     <Card.Text>
                     {
                         projectDescription
                     }
                     </Card.Text>

                     <a href={projectLink} target="_blank" rel="noreferrer" >
                     <Button variant="primary">Show Project</Button>
                     </a>
                    
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
      
    );
};

export default ProjectDetails;