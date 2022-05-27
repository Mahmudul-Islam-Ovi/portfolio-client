import React from 'react';

import {Navbar,Nav,Container,NavDropdown} from 'react-bootstrap';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import './Nab.css'
import { Link } from 'react-router-dom';
import logo from '../assets/img/main logo.png'

const NavBar = () => {
    return (
      <Navbar collapseOnSelect expand="lg" className="nav-color fixed-top">
      <Container >
      <Navbar.Brand href="/">
        <img src={logo} width="50px" alt="" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="m-auto">
          <Link to="/" className="nav-style m-2">
          <Nav  className='color-nab '>HOME</Nav>
          </Link>
          <Link to="/about"  className="nav-style m-2">
          <Nav className='color-nab ' href="#features">ABOUT</Nav>
          </Link>
          <Link to="/project" className="nav-style m-2"> 
          <Nav className='color-nab ' href="#pricing">PROJECT</Nav>
          </Link>
          <Link to="/contact" className="nav-style m-2"> 
          <Nav className='color-nab ' href="#pricing">CONTACT</Nav>
          </Link>
          <NavDropdown  title="MORE" id="collasible-nav-dropdown">
          <Link to="/Experience" className="nav-style ">
          <NavDropdown.Item className='color-nab' href="#action/3.1">Experience</NavDropdown.Item>
          </Link>
          <Link to="/Blog" className="nav-style ">
          <NavDropdown.Item className='color-nab ' href="#action/3.2">Blog</NavDropdown.Item>
          </Link>
          <Link to="/Setting" className="nav-style ">
          <NavDropdown.Item className='color-nab ' href="#action/3.3">Setting</NavDropdown.Item>
          </Link>
          </NavDropdown>
        </Nav>
        <Nav >
          <a  href="https://www.facebook.com/profile.php?id=100010806793896" rel="noreferrer"  target="_blank" className="text-reset text-decoration-none icon" > <FacebookIcon></FacebookIcon></a>
          <a href="https://github.com/Mahmudul-Islam-Ovi" rel="noreferrer" target="_blank" className="text-reset text-decoration-none icon">  < GitHubIcon></GitHubIcon></a>
        
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar> 
    );
};

export default NavBar;