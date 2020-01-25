import React from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import Login from '../components/pages/Login';
import Register from '../components/pages/Register';
import '../components/styles/Login.css';


function App() {

  // ini kalo menggunakan syntax di react.js
  //return React.createElement('div', {className: 'App'}, React.createElement('h1',null,'Hi, there'))

  // ini klo menggunakan jsx
  return (
    <Router basename="/react-auth-ui/">
      <div className="App">
        <div className="App__Aside"></div>
        <div className="App__Form">
          <div className="PageSwitcher">
            <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
            <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
          </div>

          <div className="FormTitle">
            <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
          </div>

          <Route exact path="/" component={Register}>
          </Route>
          <Route path="/sign-in" component={Login}>
          </Route>
        </div>
      </div>
    </Router>

  );
}

export default App;
