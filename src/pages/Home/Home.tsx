import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Innovations from "./components/Innovations/Innovations";
import News from "./components/News/News";
import Offers from "./components/Offers/Offers";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Innovations />
      <News />
      <Offers />
    </div>
  );
};

export default Home;
