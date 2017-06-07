import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  pickRandomStudent() {
    // Make an array of all students
    const students = [
      "emmafallancy",
      "zenrevilene",
      "samnevers",
      "jamesedwardferguson",
      "AhiShahar",
      "mariomaia77",
      "rocking42",
      "dgjd",
      "silvatim",
      "zitongliu",
      "EstherpgTan",
      "ewelina-borucka",
      "rhys5690"
    ];

    // Pick a random username
    const randomIndex = Math.floor(Math.random() * students.length);
    const username = students[randomIndex];

    this.props.history.push(`/details/${username}`);
  }
  render() {
    return (
      <div>
        <h3>Welcome to our Github App</h3>
        <p>This will display a basic user profile for a given user</p>
        <Link to="/search">
          <button className="button-primary">Search for a user</button>
        </Link>
        <button
          className="button-primary"
          onClick={this.pickRandomStudent.bind(this)}
        >
          Pick a random WDi18 student
        </button>
      </div>
    );
  }
}

export default Home;
