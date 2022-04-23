import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Nav, Navbar, NavLink} from 'react-bootstrap';
import {Link} from 'react-router-dom';
function Usernavbar() {
  return(
      <div>
<>
  <br />
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand >Navbar</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link as={Link} to="/" >Home</Nav.Link>
      <Nav.Link >Features</Nav.Link>
      <Nav.Link >Pricing</Nav.Link>
      <NavLink as={Link} to="/login">login</NavLink>
      <Nav.Link as={Link} to="/register">register</Nav.Link>

    </Nav>
    </Container>
  </Navbar>

  <br />
</>
      </div>
      );
}
export default Usernavbar;
