import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Nav, Navbar, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Usernavbar() {
  return (
    <div>
      <>
        <Navbar bg='primary' variant='dark'>
          <Container>
            <Navbar.Brand>ebook-management</Navbar.Brand>
            <Nav className='me-auto'>
              <Nav.Link as={Link} to='/'>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to='/books'>
                Books
              </Nav.Link>
              <Nav.Link as={Link} to='/audiobooks'>
                Audiobooks
              </Nav.Link>
              <Nav.Link as={Link} to='/authors'>
                Authors
              </Nav.Link>
              <Nav.Link as={Link} to='/library'>
                Library
              </Nav.Link>
              <Nav.Link as={Link} to='/sell'>
                Sell
              </Nav.Link>
              <NavLink as={Link} to='/login'>
                login
              </NavLink>
              <Nav.Link as={Link} to='/register'>
                register
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <br />
      </>
    </div>
  )
}
export default Usernavbar
