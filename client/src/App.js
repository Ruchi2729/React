import React, { Component } from 'react';

import  './App.css';

import Main from './Main'

import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";



class App extends Component {
  render() {
    return (

        <div className="App container">

            <Navbar fluid collapseOnSelect clssName='navbar'>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">Search Your Movie</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <LinkContainer to="/signup">
                            <NavItem>Signup</NavItem>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <NavItem>Login</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>


            <Main />


        </div>

    );
  }
}

export default App;
