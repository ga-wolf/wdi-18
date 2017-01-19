import React, { Component } from 'react';

class UserProfile extends Component {
  render() {
    if ( !this.props.user.login ) {
      return ( <div>Loading...</div> );
    } else {

      const user = this.props.user;
      return (
        <div>
          <h5>Stats</h5>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <p>Public Repositories: {user.public_repos}</p>
          <p>Public Gists: {user.public_gists}</p>
        </div>
      );

    }
  }
}

export default UserProfile;
