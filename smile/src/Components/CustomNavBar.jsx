import React, {Component} from "react";
import {Navbar, Nav, NavItem, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
import './CustomNavBar.css';

class CustomNavBar extends  Component{
render(){
return(

<Navbar default collapseOnSelect>
<Navbar.Header>
<Navbar.Brand> 
<Link to= "/">SmileLife </Link>
</Navbar.Brand>
<Navbar.Toggle/>
</Navbar.Header>
<Navbar.Collapse>
<Nav pullRight>
<NavItem eventKey={1} componentClass={Link} href="/" to="/">
Home
</NavItem>

<NavItem eventKey={2} componentClass={Link}  href="/About" to="/About">
About
</NavItem>

<NavItem eventKey={3} componentClass={Link} href="/News" to="/News">
Services
</NavItem>

<NavItem eventKey={4} componentClass={Link} href="/Success" to="/Success">
Success Stories
</NavItem>

<NavItem eventKey={5} componentClass={Link} href="/Contact" to="/Contact">
Contact us
</NavItem>

<NavItem eventKey={6} componentClass={Link} href="/SignIn" to="/SignIn">
<Button bsStyle="primary">Sign in</Button>
</NavItem>

<NavItem eventKey={7} componentClass={Link} href="/SignUp" to="/SignUp">
<Button bsStyle="primary">Sign up</Button>
</NavItem>

</Nav>

</Navbar.Collapse>
   </Navbar>

)

}

}

export default CustomNavBar;