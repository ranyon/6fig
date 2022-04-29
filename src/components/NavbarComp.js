import '../App.css';
import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Subscribe from './Subscribe';
import Login from './Login';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

class NavbarComp extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className='myNavBar' collapseOnSelect expand='lg'>
            <Navbar.Brand as={Link} to={'/'}>
              {/* <h3 className='_6figs'> */}
              6 Figures
              {/* </h3> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav' />
            <Navbar.Collapse id='responsive-navbar-nav'>
              <Nav className='ml-auto'>
                <Nav.Link as={Link} to={'/subscribe'} className='myNavLink'>
                  Subscribe
                </Nav.Link>
                <Nav.Link as={Link} to={'/login'} className='myNavLink'>
                  Login
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/subscribe' element={<Subscribe />} />
            <Route path='/login' element={<Login />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

export default NavbarComp;
