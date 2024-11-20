import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
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
         <Navbar sticky='top' collapseOnSelect expand="lg" id='navBar'>
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
          <Nav.Link as={Link} to="Cart" style={{color:'white' , marginRight:20 , alignContent:'center'}}>My Cart</Nav.Link>
          <FontAwesomeIcon style={{alignContent:'center', marginTop:'16px' , marginRight:'20px'}} icon={faCartShopping} />
          <h2 style={{alignContent:'center'}}>|</h2>
            <Nav.Link as={Link} to="Contact" style={{color:'white' , marginRight:20 , alignContent:'center'}}>Get in Touch</Nav.Link>
            {/* <div className="icons"> */}
            <FontAwesomeIcon icon={faMagnifyingGlass} id='searchicon' style={{marginRight:20 , marginTop:16}}/>
            <h2 style={{alignContent:'center'}}>|</h2>
            {/* <FontAwesomeIcon icon={faGripLinesVertical} id='lineicon' style={{fontSize:40 , marginTop:-5}}/> */}
            <FontAwesomeIcon style={{  marginLeft:20 , marginTop:'16px'}} icon={faUser}id='usericon' />
            {/* </div> */}
            <NavDropdown style={{alignContent:'center' , marginLeft:20}} title="My Account" id="collapsible-nav-dropdown" >
              <NavDropdown.Item as={Link} to="Login">Login</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="Sign">Sign Up</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </>
    )
}
export default Topbar;