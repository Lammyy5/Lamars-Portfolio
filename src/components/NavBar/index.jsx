import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return ( 
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to='Homework-Projects/HW20/Lamars-Portfolio/src/App.jsx'>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='Homework-Projects/HW20/Lamars-Portfolio/src/pages/AboutMe.jsx'>Home</Nav.Link>
          <Nav.Link as={Link} to=''>Features</Nav.Link>
          <Nav.Link as={Link} >Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
    );
};

export default NavBar