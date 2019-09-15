import React, { Component } from "react";
import "./index.css";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h1>Tell us about yourself</h1>
        <p>
          <a>I am a &nbsp;</a>
          <button type="button" className="button">Student</button>
          <button type="button" className="button">Broker</button>
        </p>
        <h2>Plan Your Trip</h2>
          <h3>Where are you going?</h3>
            <input type="text" placeholder="From"></input>
            <input type="text" placeholder="To"></input>
          <h3>What dates?</h3>
            <input type="date" placeholder="Start Date"></input>
            <input type="date" placeholder="End Date"></input>
          <h3>How many people are travelling?</h3>    
            <input type="number" placeholder="#" min="1"></input>  
        <br/>  <br/>  <br/>  <br/>  
        <button type="button" className="button">Find my Tour!</button>  
      </div>
    );
  }
}
 
export default Home;