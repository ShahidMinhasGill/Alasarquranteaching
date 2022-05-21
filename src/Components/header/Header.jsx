import React from 'react'
import './header.css'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
export default function MyHeader() {
  return (
    <div id=''>
      <Navbar collapseOnSelect expand="lg" id='navbar' className='navbar fixed-top '>
        <Container>
          <Navbar.Brand href="#home" className='logo me-auto '>Alassar</Navbar.Brand>
          <Navbar.Toggle className='' aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className='nav_link scrollto'>Home</Nav.Link>
              <Nav.Link href="#about" className='nav_link scrollto'>About Us</Nav.Link>
              <Nav.Link href="#services" className='nav_link scrollto'>Service</Nav.Link>
              <Nav.Link href="#monthly-fee" className='nav_link scrollto'>Monthly fee</Nav.Link>
              {/* <Nav.Link href="#team" className='nav_link scrollto'>Team</Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              <Nav.Link href="#contact" className='nav_link scrollto'>Contact</Nav.Link>
              {/* <Nav.Link href="#pricing" className='nav_link scrollto getstarted active'>GetStarted</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


    </div>
  )
}
