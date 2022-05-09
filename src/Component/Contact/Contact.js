import React from 'react';
import './Contact.css';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
import './Contact.css'

const Contact = () => {
      
    return (
      <div className="bg">
      <div className="row m-5 ">
        <div className="col text-center mt-5 p-5 ">
         <h1 className="">Contact Us</h1>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, adipisci!</p>
        </div>
        <div className="col p-5 mt-5  boder">
        <FormControl className=" m-2">
          <InputLabel htmlFor="input-with-icon-adornment">Enter Your Name</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            }
          />
        </FormControl >
        <FormControl  className=" m-2" >
          <InputLabel htmlFor="input-with-icon-adornment">Enter Your Email</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl  className=" m-2" >
          <InputLabel htmlFor="input-with-icon-adornment">Enter Massage</InputLabel>
          <Input
            id="input-with-icon-adornment"
            startAdornment={
              <InputAdornment position="start">
                <MessageIcon />
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
      </div>
      </div>
       
    );
};

export default Contact;