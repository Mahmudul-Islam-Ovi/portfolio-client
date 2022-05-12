import React from 'react';
import { Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions } from '@mui/material';
import './Project.css';
import { Button } from 'react-bootstrap';


const ProjectDetails = ({projectdetails}) => {

    const {projectName,projectDescription,projectLink,image} = projectdetails;
    return (
                <Grid item xs={12} sm={6} md={4} className='effect p-5'>
                   <Card sx={{ maxWidth: 450 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="220"
          image={`data:image/jpeg;base64,${image}`}
          alt="green iguana"
        />
        <CardContent className="bg-secondary">
          <Typography gutterBottom variant="h5" component="div">
           {projectName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {projectDescription}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className="bg-secondary">
          <a href={projectLink} target="_blank"  rel="noreferrer">
          <Button size="small" color="primary">
          Show Project
        </Button>
          </a>
      </CardActions>
    </Card>
     </Grid>
      
    );
};

export default ProjectDetails;