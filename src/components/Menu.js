import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';
import './Menu.css'; // Assuming you'll create a CSS file for additional styles

export default function Menu() {
  return (
    <div>
      <Navbar expand="lg" className="bg-dark text-white">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-secondary" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-center w-100 m-4 fs-5">
              <Link className='nav-link text-white show-1' to="/show-user">Show Users</Link>
              {/* <Link className='nav-link text-white' to="/edit-user">Edit Users</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
}
