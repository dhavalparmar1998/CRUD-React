import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../components/Home.css'

export default function Home() {
  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
    >
      <h1 className='home page-1 m-5'>Welcome to the Home Page</h1>
      <Link to="/login" className="mt-4 fs-4 link page-1">Sign In</Link> 
    </Container>
  );
}