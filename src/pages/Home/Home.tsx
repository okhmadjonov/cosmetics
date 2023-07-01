import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Innovations from "./components/Innovations/Innovations";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Innovations />
    </div>
  );
};

export default Home;
