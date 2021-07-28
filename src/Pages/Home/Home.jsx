import React from "react";
import Chart from "../../Components/Chart/Chart";

import "./Home.style.scss";

const Home = () => {
  return (
    <div className="home">
      <h1 className="home__title">Home</h1>
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
