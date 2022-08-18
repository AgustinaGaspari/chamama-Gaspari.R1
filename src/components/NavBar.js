
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import {Link} from "react-router-dom";
import Categories from './Categories';

function BasicExample() {
  console.log('me renderice soy NavBar')
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container className="contenedor">
        <Navbar.Brand className="tienda">
          <Link to={"/"}>TIENDA CHAMAMA</Link> 
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <Categories />
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to={"/cart"}><CardWidget id="carrito"/> </Link>
      </Container>
      
    </Navbar>
    
  );
}

export default BasicExample;


