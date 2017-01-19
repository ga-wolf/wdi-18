// Two ways that import can work
// You can get the contents of a package from NPM
// You can get the contents of a file in your own system
// Both of those ways will only include exported contents

import React from "react";
import ReactDOM from "react-dom";
import Avatar from "./components/Avatar";
import Routes from './config/Routes';

class HelloWorld extends React.Component {
  render() {
    return ( <div>Hello {this.props.name}</div> );
  }
}

const USER_DATA = {
  name:     "Badger",
  imageURL: "https://avatars.githubusercontent.com/u/12031476?v=3",
  username: "cjbarnaby"
};

ReactDOM.render( Routes, document.getElementById("app") );
