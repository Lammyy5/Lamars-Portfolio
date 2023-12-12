import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {

return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
            <Navbar.Brand as={Link} to='/'>Lamar Reliford</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link as={Link} to='/'>About Me</Nav.Link>
                <Nav.Link as={Link} to='Homework-Projects/HW20/Lamars-Portfolio/src/pages/Portfolio.jsx'>Portfolio</Nav.Link>
                <Nav.Link as={Link} to='Homework-Projects/HW20/Lamars-Portfolio/src/pages/Contact.jsx'>Contact</Nav.Link>
                <Nav.Link as={Link} to='Homework-Projects/HW20/Lamars-Portfolio/src/pages/Resume.jsx'>Resume</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
    
);
};

export default Header