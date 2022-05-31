
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import './Project.css'
import ProjectDetails from './ProjectDetails';

const Project = () => {

     const [projects,setProject]= useState([]);

     useEffect(() => {
         fetch('https://portfolio-backend-servers.herokuapp.com/project')
         .then(res => res.json())
         .then(data=> setProject(data))
     },[])


    return (
        <div className="bg2">
        <div className='container  '>
            <h1 className="text-center mto project">Project</h1>
        <Container>

            <Grid container spacing={2}>
            {
                projects.map(projectdetails=><ProjectDetails
                   
                    key={projectdetails._id}
                    projectdetails={projectdetails}

                ></ProjectDetails>)
            }

            </Grid>
            
            </Container>
            </div>
      
         </div>
    );
};

export default Project;