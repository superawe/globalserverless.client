import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from "react-router-dom";

const Home = () => <h1>Home</h1>;
const Admin = () => <h1>Admin</h1>;
const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/admin">Admin</Link>
    </li>
  </ul>
);

const App = () => (
  <div className="App">
    <header className="App-header">
      <Router>
        <NavBar />
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/admin" component={Admin} />
            <Route path="/">
              <Redirect to="/"></Redirect>
            </Route>
          </Switch>
        </div>
      </Router>
    </header>
    <p className="App-intro">
      This is an example site created for an article hosted on{" "}
      <a href="https://www.pario.se" target="_blank">
        pario.se
      </a>
    </p>
  </div>
);

export default App;
