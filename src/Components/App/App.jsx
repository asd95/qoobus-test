// React
import React from "react";
// Routing
import { Route, Switch } from "react-router-dom";
// Pages
import SignUp from "../../Pages/SignUp/SignUp";
import SignIn from "../../Pages/Signin/SignIn";
import Home from "../../Pages/Home/Home";
// Components
import Header from "../Header/Header";

// styles
import "./App.style.scss";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route path="/signIn" exact component={SignIn} />
        <Route path="/home" exact component={Home} />
      </Switch>
    </div>
  );
};

export default App;
