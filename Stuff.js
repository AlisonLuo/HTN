import React, { Component } from "react";
import "./index.css";
 
class Stuff extends Component {
  render() {
    return (
      <div>
          <h1>Matches</h1>
          <h2>University of Waterloo Fall 2019</h2>
          <table>
            <tr>
                <th>Tour</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>Date</td>
                <td>September 16, 2019</td>
            </tr>
            <tr>
                <td>Time</td>
                <td>12:30pm</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>45 mins</td>
            </tr>
            <tr>
                <td>Available spots</td>
                <td>4</td>
            </tr>
            <tr>
                <td>Nearest airport</td>
                <td>Pearson Airport, Toronto ON</td>
            </tr>
            <tr>
                <td>Estimated Cost</td>
                <td>$80</td>
            </tr>
          </table>
          <h3>Available Accomodations</h3>
          <table>
            <tr>
                <th>Accomodations</th>
                <th>Types</th>
            </tr>
            <tr>
                <td>Housing</td>
                <td>Delta, Marriot, Residence, Sublet</td>
            </tr>
            <tr>
                <td>Commute</td>
                <td>Shuttle Bus, Taxi, Uber, GRT Trasit</td>
            </tr>
          </table>
          <br/>
          <h2>Laurier University Fall 2019</h2>
          <table>
            <tr>
                <th>Tour</th>
                <th>Details</th>
            </tr>
            <tr>
                <td>Date</td>
                <td>September 16, 2019</td>
            </tr>
            <tr>
                <td>Time</td>
                <td>4:30pm</td>
            </tr>
            <tr>
                <td>Duration</td>
                <td>55 mins</td>
            </tr>
            <tr>
                <td>Available spots</td>
                <td>2</td>
            </tr>
            <tr>
                <td>Nearest airport</td>
                <td>Pearson Airport, Toronto ON</td>
            </tr>
            <tr>
                <td>Estimated Cost</td>
                <td>$80</td>
            </tr>
          </table>
          <h3>Available Accomodations</h3>
          <table>
            <tr>
                <th>Accomodations</th>
                <th>Types</th>
            </tr>
            <tr>
                <td>Housing</td>
                <td>Delta, Marriot, Residence, Sublet</td>
            </tr>
            <tr>
                <td>Commute</td>
                <td>Shuttle Bus, Taxi, Uber, GRT Trasit</td>
            </tr>
          </table>
      </div>
    );
  }
}
 
export default Stuff;