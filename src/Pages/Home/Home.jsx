//React
import React from "react";
// Router
import { Redirect, useHistory } from "react-router-dom";
import { onLogout } from "../../actions";
// Redux
import { useDispatch, useSelector } from "react-redux";
// Material ui
import Button from "@material-ui/core/Button";
// Components
import Chart from "../../Components/Chart/Chart";

import "./Home.style.scss";

const Home = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const state = useSelector(state=> state);
  const handlerLogout = () => {
    dispatch(onLogout());
    history.push("/signIn");
  };

  if (!Object.keys(state.signUp).length !== 0 && !state.isLoggedIn) {
    return <Redirect to="/" />
  }

    return (
      <div className="home">
        <div className="home__container">
          <h1 className="home__title">Home</h1>
          <Button variant="outlined" color="primary" onClick={handlerLogout}>
            Logout
          </Button>
        </div>
        <div className="chart">
          <h2 className="home__subtitle">
            Sales for the first half of 2021 (M)
          </h2>
          <Chart />
        </div>
      </div>
    );
};

export default Home;
