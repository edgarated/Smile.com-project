import React, {Component} from "react";
import {Grid, Col, Image} from "react-bootstrap";
import "./About.css";

class About extends  Component{
render(){
return(

<div>
<Image src="Images/assassins_creed.jpg" className = "header-image" />
<Grid>
<Col xs={12} sm={8} smOffset={2}>
<Image src="Images/assassins_creed_assassin.jpg" className = "about-profile-pic" rounded />
<h3>John</h3>
<p>hhhhhh r rrrr r r r r r  r r r r r r r</p>
</Col>
</Grid>
</div>


)

}

}

export default About;