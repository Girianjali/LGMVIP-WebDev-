import React, { Component} from 'react';
import {Navbar,Nav,NavDropdown,Button} from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class NavbarComp extends Component{
    render(){
      return (
          <Router>
        <div>
          <Navbar bg="light" expand="lg">
          
            <Navbar.Brand href="#home">LetsGrowMore</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Button variant="outline-success">GET USERS</Button>

              </Nav>
            </Navbar.Collapse>
          
          </Navbar>
    </div> 

    </Router>
      )
    }
}