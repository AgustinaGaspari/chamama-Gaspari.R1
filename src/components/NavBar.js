
import './NavBar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CardWidget from './CardWidget';
import {Link} from "react-router-dom";

function BasicExample() {
  console.log('me renderice soy NavBar')
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container className="contenedor">
        <Navbar.Brand className="tienda">
          TIENDA CHAMAMA  
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav>
              <Link to={"/"}>HOME</Link>
            </Nav>
            <NavDropdown title="PRODUCTOS" id="basic-nav-dropdown">
              <NavDropdown.Item id="producto1">
               <Link to={"/category/bolsos"}>BOLSOS</Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="producto2">
                <Link to={"/category/billeteras"}>BILLETERAS</Link>
              </NavDropdown.Item> 
              <NavDropdown.Item id="producto3">
                <Link to={"/category/tabaqueras"}>TABAQUERAS</Link>
              </NavDropdown.Item>
              <NavDropdown.Item id="producto4">
                <Link to={"/category/rinoneras"}>RIÑONERAS</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Link to={"/cart"}><CardWidget id="carrito"/> </Link>
      </Container>
      
    </Navbar>
    
  );
}

export default BasicExample;


