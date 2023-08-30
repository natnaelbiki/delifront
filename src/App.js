import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';
import Signup from './components/signup';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Navbar';

function App() {
  const user = null;
  return (
    <div className="App">
     <Navbar bg="primary" variant="dark">
  <div className="container-fluid">
<Navbar.Brand>Dicha Delivery</Navbar.Brand>
  <Nav className="me-auto">
  <Container>
    { user ? (
<Link class="nav-link">Logout ({user})</Link>
) : (
<>
<Link class="nav-link" to={"/login"}>Login</Link>
<Link class="nav-link" to={"/signup"}>Sign Up</Link>
</>
)}
</Container>
</Nav>
</div>
</Navbar>
<div style={{ margin: '100px' }}>
      <img src="https://reactjs.org/logo-og.png" alt="react logo" style={{ width: '400px', }}/>
      <div>Desgined By Natnael Biki @2023 </div>
    </div>
    </div>
    );
  }

export default App;