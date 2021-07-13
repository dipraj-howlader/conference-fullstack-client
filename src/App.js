import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import HomePage from "./Screens/HomePage/HomePage";
import Login from "./Screens/Login/Login";


const App = () => {
  return (
    <Router>
    <Switch>
    <Route path="/home">
      <HomePage></HomePage>
    </Route>
    <Route exact path="/">
      <HomePage></HomePage>
    </Route>
    <Route path="/login">
      <Login></Login>
    </Route>
    </Switch>
    </Router>
  );
};

export default App;
