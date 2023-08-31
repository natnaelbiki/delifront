import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Login from './components/login';
import Signup from './components/signup';

import SupplierDataService from './services/supplier_services.js';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import Container from 'react-bootstrap/Navbar';

function App() {
  const [user, setUser] = React.useState(null);
  const [token, setToken] = React.useState(null);
  const [error, setError] = React.useState(null);

  async function login(user=null){
    SupplierDataService.login(user).then(response=>{
      setToken(response.data.token);
      setUser(user);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', user.username);
      setError('');
    }).catch(e=>{
      console.log('login', e);
      setError(e.toString());
    });
  }
  async function logout(){
    setToken('');
    setUser('');
    localStorage.setItem('token', '');
    localStorage.setItem('user', '');
  }
  async function signup(user=null){
    setUser(user);
  }
  return (
    <div className="App">
     <Navbar bg="primary" variant="dark">
  <div className="container-fluid">
<Navbar.Brand>Dicha Delivery</Navbar.Brand>
  <Nav className="me-auto">
  <Container>
    { user ? (
<Link className="nav-link" onClick={logout}>Logout ({user})</Link>

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
<div className="container mt-4">
<Switch>
<Route path="/login" render={(props)=>
<Login {...props} login={login} />
}>
</Route>
<Route path="/signup" render={(props)=>
<Signup {...props} signup={signup} />
}>
</Route>
</Switch>
</div>

<footer className="text-center text-lg-start
bg-light text-muted mt-4">
<div className="text-center p-4">
© Copyright - <a
target="_blank"
className="text-reset fw-bold text-decoration-none"
href="https://twitter.com/greglim81"
>
Natnael Biki
</a> - <a
target="_blank"
className="text-reset fw-bold text-decoration-none"
href="https://twitter.com/danielgarax"
>
Wolaita Sodo, Ethiopia
</a>
</div>
</footer>
    </div>
    );
  }

export default App;