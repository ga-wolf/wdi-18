import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  pickRandomStudent() {
    // Make an array of all students
    const students = ["emmafallancy", "zenrevilene", "samnevers", "jamesedwardferguson", "AhiShahar", "mariomaia77", "rocking42", "dgjd", "silvatim", "zitongliu", "EstherpgTan", "ewelina-borucka", "rhys5690"];

    // Pick a random username
    const randomIndex = Math.floor( Math.random() * students.length );
    const username = students[ randomIndex ];

    // Then go to the /details/:username with that username
      // YOU MUST HAVE CONTEXT TYPES SET UP TO DO THIS!
    this.context.router.push( `/details/${username}` );
  }
  render() {
    return (
      <div>
        <h3>Welcome to our Github App</h3>
        <p>This will display a basic user profile for a given user</p>
        <Link to="search">
          <button className="button-primary">Search for a user</button>
        </Link>
        &nbsp;
        <button
          className="button-primary"
          onClick={ this.pickRandomStudent.bind( this ) }>
          Pick a random WDi18 student
        </button>
      </div>
    );
  }
}
Home.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Home;
