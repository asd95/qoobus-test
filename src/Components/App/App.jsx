// React
import React from 'react';
// Routing
import { Route, Switch } from "react-router-dom";
// Pages
import SignUp from '../../Pages/SignUp/SignUp';
// Components
import Header from '../Header/Header';

// styles
import './App.style.scss';

const App = ()=> {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" exact component={SignUp} />
        <Route
          path="/SignIn"
          exact
          render={() => {
            return <h1>Sign In</h1>;
          }}
        />
        <Route
          path="/Home"
          exact
          render={() => {
            return <h1>HOME PAGE</h1>;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
