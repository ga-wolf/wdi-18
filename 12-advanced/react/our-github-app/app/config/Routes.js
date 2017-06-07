import React from "react";

// Object Destructuring
import { HashRouter as Router, Route, Link } from "react-router-dom";

import Main from "../components/Main";
import Home from "../components/Home";
import Search from "../components/Search";
import Details from "../components/Details";

// This variable is like our config/routes.rb file
// It is using hash-based navigation
// The <Route path="/" component={Main}> is specifying which application.html.erb (the component that I want to wrap around all other components is Main)

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/details/:username" component={Details} />
    </div>
  </Router>
);

// const routes = (
//   <Router history={hashHistory}>
//     <Route path="/" component={Main}>
//       <IndexRoute component={Home} />
//       <Route path="home" component={Home} />
//       <Route path="search" component={Search} />
//       <Route path="details/:username" component={Details} />
//     </Route>
//   </Router>
// );

export default routes;
