import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>Welcome to our Github App</h3>
        <p>This will display a basic user profile for a given user</p>
        <Link to="search">
          <button className="button-primary">Search for a user</button>
        </Link>
        &nbsp;
        <button className="button-primary">Pick a random WDi18 student</button>
      </div>
    );
  }
}

export default Home;
