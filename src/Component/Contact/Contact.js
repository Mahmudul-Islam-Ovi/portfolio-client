import React, { useRef } from 'react';
import './Contact.css';



const Contact = () => {

  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();

  const handleAddMessage = e => {

    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    const newMessage={name,email,message};
    fetch('http://localhost:4000/users',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newMessage)
    })
    .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Message send Successfully')
                e.target.reset();
            }
        })

       e.preventDefault();
  }
      
    return (
     
        
        <div className="contact-form boder" id="contact">
      
      <div className="m-5 p-5">
       
          <h1>Get in Touch Contact me</h1>
          
        
      </div>
      {/* right side form */}
      <div className="c-right ">
      <form onSubmit={handleAddMessage}>
          <input type="text" ref={nameRef} name="user_name" className="user"  placeholder="Name"/>
          <input type="email" ref={emailRef} name="user_email" className="user" placeholder="Email"/>
          <textarea name="message" ref={messageRef} className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="btn-primary"/>
        </form>
      </div>
    
    {/* <form onSubmit={handleAddMessage}>
            <input type="text" placeholder="name" ref={nameRef}/><br />
            <input type="text" placeholder="email" ref={emailRef}/><br />
            <input type="text" placeholder="message" ref={messageRef}/><br />
            <br />
            <input type="submit" value="add" />
          </form> */}

    </div>
         
          
        
       
        
      
      
       
    );
};

export default Contact;