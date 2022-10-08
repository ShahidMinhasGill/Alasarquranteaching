import React from 'react'
import './header.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
// import logo from '../../assetes/Logo.png'
export default function MyHeader() {
  return (
    <div id=''>
      <Navbar collapseOnSelect expand="lg" id='navbar' className='navbar fixed-top '>
        <Container>
          <Navbar.Brand className=' logo me-auto ' href='#home'> AL-FAJR</Navbar.Brand>
          <Navbar.Toggle className='' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='nav_link scrollto'>Home</Nav.Link>
              <Nav.Link href="#about" className='nav_link scrollto'>About Us</Nav.Link>
              <Nav.Link href="#services" className='nav_link scrollto'>Service</Nav.Link>
              <Nav.Link href="#monthly-fee" className='nav_link scrollto'>Monthly fee</Nav.Link>

              <Nav.Link href="#contact" className='nav_link scrollto'>Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}
