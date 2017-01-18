// A React Component
  // Functionality
  // Presentation

// We can pass data into a React Component using props
  // <HelloWorld name="Badger" />
  // this.props = { name: "Badger" }

// We can use interpolation in templates by wrapping JS code in curly brackets

import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <h1>Our React.js App</h1>
      </div>
    );
  }
}

class HelloUser extends React.Component {
  render() {
    return (
      <h2 className="hello">
        Hello { this.props.name }
      </h2>
    );
  }
}

class WDI18 extends React.Component {
  render() {
    return (
      <div>
        <h1>Students</h1>
        <hr/>
        <HelloUser name="Fancy" />
        <HelloUser name="Rozilla" />
        <HelloUser name="Sam" />
        <HelloUser name="Esther" />
        <HelloUser name="Tim" />
        <HelloUser name="Drew" />
      </div>
    );
  }
}

class FavouriteNumber extends React.Component {
  render() {
    console.log( this.props );
    return (
      <p>The number { this.props.favNumber }</p>
    );
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <div className="todoList">
        This is our Todo List
      </div>
    );
  }
}

class ShowMovie extends React.Component {
  render() {
    console.log( this.props );
    return (
      <p>
        A favourite movie of mine is: {this.props.title}
      </p>
    );
  }
}

class MovieList extends React.Component {
  render() {
    return (
      <div>
        <h1>My Movies</h1>
        <hr/>
        <ShowMovie title="Satantango" />
        <ShowMovie title="Fight Club" />
        <ShowMovie title="Sharknado" />
        <ShowMovie title="Snakes on a plane" />
      </div>
    );
  }
}
// ShowMovie - receive a title prop
// MovieList - render lots of ShowMovie components
// <div>
//   <h1>My Movies</h1>
//   <hr/>
//   <p>A favourite of mine is: Satantango</p>
//   <p>A favourite of mine is: Satantango</p>
//   <p>A favourite of mine is: Satantango</p>
// </div>

class ChildComponent extends React.Component {
  constructor() {
    super(); // Run everything necessary from React.Component
    // Set the initial state
    console.log("\tChildComponent: constructor()");
  }
  componentWillMount() {
    // Start anything that takes a little bit of time (AJAX)
    console.log("\tChildComponent: componentWillMount()");
  }
  render() {
    // Output some HTML - can refer to props and state
    console.log("\tChildComponent: render()");
    return (
      <div>
        <h2>Child Component</h2>
      </div>
    );
  }
  componentDidMount() {
    // The component is actually on the page... You could do an animation here
    console.log("\tChildComponent: componentDidMount()");
  }
  componentWillUnmount() {
    // The component is about to be removed from the page... You could stop timers here, stop running AJAX calls
    console.log("\tChildComponent: componentWillUnmount()");
  }
}

class ParentComponent extends React.Component {
  constructor() {
    super(); // Run everything necessary from React.Component
    // Set the initial state
    console.log("ParentComponent: constructor()");
  }
  componentWillMount() {
    // Start anything that takes a little bit of time (AJAX)
    console.log("ParentComponent: componentWillMount()");
  }
  render() {
    // Output some HTML - can refer to props and state
    console.log("ParentComponent: render()");
    return (
      <div>
        <h1>Parent Component</h1>
        <hr />
        <ChildComponent />
      </div>
    );
  }
  componentDidMount() {
    // The component is actually on the page... You could do an animation here
    console.log("ParentComponent: componentDidMount()");
  }
  componentWillUnmount() {
    // The component is about to be removed from the page... You could stop timers here, stop running AJAX calls
    console.log("ParentComponent: componentWillUnmount()");
  }
}

// ShowTodos must be given a prop called todos and that has to be an array
// I will see a defaultProp of favNumber to 42


class ShowTodos extends React.Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      completedLoading: false
    }
  }
  componentWillMount() {
    window.setTimeout(() => {
      // If you want to re-render a component, you have to use setState!
        // Explicit mutation - one pathway to change the presentation
      this.setState({
        completedLoading: true
      });
    }, 1000);
  }
  render() {
    if ( this.state.completedLoading ) {
      const todoListItems = this.props.todos.map((t) => {
        return (
          <li key={Math.random()}>
            {t}
          </li>
        );
      });
      return (
        <div>
          <ul>
            {todoListItems}
          </ul>
        </div>
      );
    } else {
      return (
        <div>
          <p>Loading...</p>
        </div>
      );
    }
  }
}
// Validations, making sure the data is in the right format and you can also make sure that the data exists
ShowTodos.propTypes = {
  todos: React.PropTypes.array.isRequired,
  favNumber: React.PropTypes.number
};
ShowTodos.defaultProps = {
  todos: [],
  favNumber: 42
};

class TodosContainer extends React.Component {
  render() {
    const todos = [
      "Watch Satantango",
      "Watch grass grow",
      "Todo number 3",
      "Todo number 4",
      "Miss Badger"
    ];
    return (
      <div>
        <h1>All Todos</h1>
        <hr />
        <ShowTodos todos={ todos } />
      </div>
    );
  }
}

ReactDOM.render(
  <TodosContainer />,
  document.getElementById('app')
);
