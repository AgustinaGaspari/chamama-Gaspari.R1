
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';


function BasicExample() {
  console.log('me renderice soy NavBar')
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container className="contenedor">
        <Navbar.Brand className="tienda" href="#home">TIENDA CHAMAMA <CardWidget id="carrito"/> </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            <Nav.Link href="#link">CONOCENOS</Nav.Link>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1" id="producto1">BOLSOS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" id="producto2"> BILLETERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" id="producto3">TABAQUERAS</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4" id="producto4">BANDOLERAS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
      
    </Navbar>
    
  );
}

export default BasicExample;


