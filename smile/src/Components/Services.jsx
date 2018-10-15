import React, {Component} from "react";
import "./Services.css";
import {Grid, Row, Col, Image} from "react-bootstrap";


class Services extends  Component{
render(){
return(

<div>
<Image src="Images/assassins_creed_black_flagjpg.jpg" className="header-image" />
<Grid>
<h2>News</h2>
<Row>

<Col xs={12} sm={8} className="main-section">
<p>Trusted by millions and serving users world wide.
This service is provided globally by more than 2500 handpicked doctors from top hospitals.
Most convenient for expats and travellers.</p>
</Col>
<Col xs={12} sm={4} className= "sidebar-section">
<Image src="Images/assassins_creed.jpg"/>
<p>how are we doing today</p>
</Col>
</Row>


</Grid>

</div>


)

}

}

export default Services;