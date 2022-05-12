
import React, { useEffect, useState } from 'react';
import './Project.css'
import ProjectDetails from './ProjectDetails';

const Project = () => {

     const [projects,setProject]= useState([]);

     useEffect(() => {
         fetch('http://localhost:4000/project')
         .then(res => res.json())
         .then(data=> setProject(data))
     },[])


    return (
        <div className="bg2">
        <div className='container  '>
            <h1 className="text-center mto project">Project</h1>
        
            {
                projects.map(projectdetails=><ProjectDetails
                   
                    key={projectdetails._id}
                    projectdetails={projectdetails}

                ></ProjectDetails>)
            }
            
            </div>
      
        </div>
    );
};

export default Project;