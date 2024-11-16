import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faGripLinesVertical } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';


import logo from "../images/logomain.png"
const Topbar=()=>{
    return(
        <>
         <Navbar collapseOnSelect expand="lg" id='navBar'>
        <Container style={{backgroundColor:'transparent'}}  id='navBar'>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" id='navBar'>
            <Nav.Link style={{color:'white'}} as={Link} to="/Home">Home</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/Home">Shop</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/Home">Ingredients</Nav.Link>
            <Nav.Link style={{color:'white'}} as={Link} to="/Home">Blog & Article</Nav.Link>
           
          </Nav>
          <Nav>
            <Nav.Link href="#deets" style={{color:'white' , marginRight:20 , alignContent:'center'}}>Get in Touch</Nav.Link>
            <div className="icons">
            <FontAwesomeIcon icon={faMagnifyingGlass} id='searchicon' style={{marginRight:20 , marginTop:10}}/>
            <h2 style={{marginBottom:15}}>|</h2>
            {/* <FontAwesomeIcon icon={faGripLinesVertical} id='lineicon' style={{fontSize:40 , marginTop:-5}}/> */}
            <FontAwesomeIcon style={{marginTop:10 , marginLeft:20}} icon={faUser}id='usericon' />
            </div>
            <NavDropdown style={{alignContent:'center' , marginLeft:20}} title="My Account" id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="#action/3.1">Login</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topbar;