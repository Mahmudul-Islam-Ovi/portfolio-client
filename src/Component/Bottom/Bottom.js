import React from 'react';
import './Bottom.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';


const Bottom = () => {
    return (
        <div className="row bg-color" >
            <div className="col">
                  <h4>About Me</h4>
                  <p>Copyright ©2022 All rights reserved | MD MAHMUDUL ISLAM</p>
            </div>
            <div className="col ">
                  <h4>Contact Number</h4>
                  <p>01931117186</p>
                  <p>mahmudulislam14270@gmail.com</p>
            </div>
            <div className="col">
                  <h4>Follow Me</h4>
                  <div >
                      <a href="https://www.linkedin.com/in/mahmudul-islam-39538b1b1/" rel="noreferrer"  target="_blank">
                      <LinkedInIcon color = "primary" className="m-2"></LinkedInIcon>
                      </a>
                      <a href="https://twitter.com/Mahmudu13771851" rel="noreferrer"  target="_blank">
                      <TwitterIcon color = "primary" className="m-2"></TwitterIcon>
                      </a>
                      <a href="https://www.instagram.com/mahmudul2120/" rel="noreferrer"  target="_blank">
                      <InstagramIcon color = "primary" className="m-2"></InstagramIcon>
                      </a>
                  </div>
            </div>
        </div>
    );
};

export default Bottom;