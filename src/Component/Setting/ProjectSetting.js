import React, { useState } from 'react';
import { Toast } from 'react-bootstrap';

const ProjectSetting = () => {
    const [projectName ,setProjectName] = useState('');
    const [projectDescription ,setProjectDescription] = useState('');
    const [projectLink ,setProjectLink] = useState('');
    const [image,setImage] = useState(null);
    const [success,setSuccess] = useState(false);
   
    const handleSubmit = e => {
        e.preventDefault();

        if(!image) {
            return;
        }

        const formData = new FormData();
        formData.append('projectName',projectName);
        formData.append('projectDescription',projectDescription);
        formData.append('projectLink',projectLink);
        formData.append('image',image);

        fetch('https://portfolio-backend-servers.herokuapp.com/project', {
            method: 'POST',
            body: formData
          })
          .then(res => res.json())
          .then(data => {
            if(data.insertedId){
                setSuccess('Project Add successfully');
                e.target.reset();
                
            }
          })
          .catch(error => {
            console.error('Error:', error);
          });


    }



    return (
        <div className="container">
        <h2>Project Setting</h2>
    <form onSubmit={handleSubmit}>
      <input 
      onChange={e => setProjectName(e.target.value)}
      required type="text" 
      className="user" 
       placeholder="Project Name"/>
      <br />
      <textarea
      onChange={e => setProjectDescription(e.target.value)}
      required className="user" placeholder="Project Description"/>
      <br />
      <input 
      onChange={e => setProjectLink(e.target.value)}
      required type="text" 
      className="user" 
       placeholder="Project link"/>
       <h5>Project Picture</h5>
      <input accept='image/*'
       type="file"
       onChange={e => setImage(e.target.files[0])}
        className="p-3"></input><br />
      <input type="submit" value="Upload New Project" className="btn-primary m-3 p-2"/>
    </form>
    {
        success && <Toast>
        <Toast.Body>{success}</Toast.Body>
      </Toast>
    }
    </div>
    );
};

export default ProjectSetting;