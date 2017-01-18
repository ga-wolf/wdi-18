import React from 'react';

class ProfilePic extends React.Component {
  render() {
    return (
      <img src={this.props.imageURL} />
    );
  }
}

class ProfileName extends React.Component {
  render() {
    return (
      <h3>{ this.props.name }</h3>
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    const url = `https://github.com/${ this.props.username }`;
    return (
      <div>
        <a href={ url } target="_blank">
          { this.props.username }
        </a>
      </div>
    );
  }
}

class Paragraph extends React.Component {
  render() {
    // this.props.children will represent anything in between the opening and closing tag of this component
    return (
      <p>
        {this.props.children}
      </p>
    );
  }
}

class Avatar extends React.Component {
  render() {
    return (
      <div>
        <ProfilePic imageURL={this.props.user.imageURL} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />

        <Paragraph>
          Some text goes herasknflaskfnaslkfnaslkfnaslkne
        </Paragraph>
      </div>
    );
  }
}

export default Avatar;
