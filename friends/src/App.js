import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import FriendList from './components/FriendList';
import AddFriendForm from './components/AddFriendForm';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/friends">Friends</Link>
          </li>
          <li>
            <Link to="/addfriend">Add Friend</Link>
          </li>
        </ul>
        <Switch>
          <PrivateRoute exact path="/friends" component={FriendList} />
          <PrivateRoute exact path="/addfriend" component={AddFriendForm} />
          <Route path="/login" component={Login} />{" "}
          {/* history, match, location */}
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
