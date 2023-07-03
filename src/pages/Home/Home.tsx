import React from "react";
import "./Home.scss";
import Banner from "./components/Banner/Banner";
import Innovations from "./components/Innovations/Innovations";
import News from "./components/News/News";
import Offers from "./components/Offers/Offers";
import FooterLinks from "./components/FooterLinks/FooterLinks";
const Home = () => {
  return (
    <div className="home">
      <Banner />
      <Innovations />
      <News />
      <Offers />
      <FooterLinks />
    </div>
  );
};

export default Home;
