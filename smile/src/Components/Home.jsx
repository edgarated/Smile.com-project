import React, {Component} from "react";
import { Link } from "react-router-dom";
import {Jumbotron , Grid , Row, Col, Image, Button} from "react-bootstrap";
import "./Home.css";
import "./index.css";

class Home extends Component {
render(){
return(

  <Grid>
  <Jumbotron>
  <h1> Welcome to SmileLife</h1>
  <p>This is how to build a website with react, react router and react-bootstrap</p>
  <Link to="/Form">
   <Button bsStyle="primary">Book Appointment</Button>
  </Link>
  </Jumbotron>
  <Row className="show-grid text-center">
  <Col xs={12} sm={4} className="person-wrapper">
  <Image src="Images/1.jpg"  className="profile-pic"/>
  <h3>Kandfy</h3>
  <p>lorem ipsum ddjdoajdo ojoajdj oojoj</p>
 
 </Col>

 <Col xs={12} sm={4} className="person-wrapper">
 <Image src="Images/2.jpg"  className="profile-pic"/>
 <h3>Kandfy</h3>
 <p>lorem ipsum ddjdoajdo ojoajdj oojoj</p>

</Col>

<Col xs={12} sm={4} className="person-wrapper">
<Image src="Images/3.jpg"  className="profile-pic"/>
<h3>Kandfy</h3>
<p>lorem ipsum ddjdoajdo ojoajdj oojoj</p>

</Col>
 </Row>
  </Grid>


)

}


}

export default Home;