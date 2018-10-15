import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import CustomNavBar from "./Components/CustomNavBar";
import Success from "./Components/Success";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Form from "./Components/Form";

class App extends Component {
  render() {
    return (
     <Router>
     <div>
   <CustomNavBar/>
     <Route exact path="/" component={Home}/>
     <Route  path="/About" component={About}/>
     <Route  path="/Services" component={Services}/>
     <Route  path="/Success" component={Success}/>
     <Route  path="/Contact" component={Contact}/>
     <Route path="/SignUp" component={SignUp}/>
     <Route path="/SignIn" component={SignIn}/>
     <Route path="/Form" component={Form}/>
     

     
     </div>
     
     
    </Router>
    );
  }
}


export default App;
