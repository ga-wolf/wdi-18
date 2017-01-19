import React, { Component } from 'react';
import UserProfile from './UserProfile';
import UserRepositories from './UserRepositories';
import Helpers from '../utils/Helpers';

// Container Component - Details Component
  // Child Components - UserProfile and UserRepositories
// The container will ask for data, and palm the relevant off to child components

class Details extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      repos: []
    };
  }
  componentWillMount() {
    const username = this.props.routeParams.username;

    // Life-cycle event: just before the Component is put on the page
      // Useful for starting things that take a while (AJAX requests etc.)
    Helpers.getUserInfo( username ).then((response) => {
      this.setState({
        user: response.data
      });
    });

    Helpers.getUserRepos( username ).then((response) => {
      this.setState({
        repos: response.data
      });
    });
  }
  render() {
    const username = this.props.routeParams.username;

    return (
      <div>
        <h3>The Profile of {username}</h3>
        <UserProfile user={ this.state.user } />
        <hr />
        <UserRepositories repos={ this.state.repos } />
      </div>
    );
  }
}
Details.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default Details;
