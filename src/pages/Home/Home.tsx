import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Innovations from "./components/Innovations/Innovations";
import News from "./components/News/News";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Innovations />
      <News />
    </div>
  );
};

export default Home;
