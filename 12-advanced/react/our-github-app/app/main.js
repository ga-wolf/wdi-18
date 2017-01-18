// Two ways that import can work
  // You can get the contents of a package from NPM
  // You can get the contents of a file in your own system
  // Both of those ways will only include exported contents

import React from 'react';
import ReactDOM from 'react-dom';
import Avatar from './components/Avatar';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>Hello { this.props.name }</div>
    );
  }
}

const USER_DATA = {
  imageURL: "https://avatars.githubusercontent.com/u/12031476?v=3",
  name: "Badger",
  username: "cjbarnaby"
};

ReactDOM.render(
  <Avatar user={USER_DATA} />,
  document.getElementById('app')
);
