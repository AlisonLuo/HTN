import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import "./index.css";
 
class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="App">
            <header className="App-header">
              <div className="title">
                <h1 className="accentours_title">accentours&nbsp;&nbsp;&nbsp;</h1>
                <p className="logo"><img src={"logo.png"} className="App-logo" alt="logo" /></p>
              </div>
            </header>
            <div className="cover">
              {/* <h2 className="connecting">connecting university students across Canada everyday</h2> */}
              {/* <button type="button" className="button" id="bookbtn">Book a Tour Today!</button> */}
            </div>
          </div>
          <ul className="header">
            <li><NavLink exact to="/">Start Bookings</NavLink></li>
            <li><NavLink to="/stuff">Matches</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <hr></hr>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/stuff" component={Stuff}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default Main;