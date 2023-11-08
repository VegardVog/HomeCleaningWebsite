import React from "react";
import Navbar from "../components/Navbar";
import { Counter } from "../features/counter/counter";
import "../css/HomePage.css";

const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Navbar />

      <div className="homePageContentWrapper">
        <img
          id="daybackground"
          src={require("../images/daybackground.jpg")}
          alt="background"
        />
        <img
          id="garabgeDumpTransparent"
          src={require("../images/garabgeDumpTransparent.jpg")}
          alt="background"
        />
        <img
          id="sckyscrapersWOBackground"
          src={require("../images/sckyscrapersWOBackground.jpg")}
          alt="background"
        />
      </div>
    </div>
  );
};

export default HomePage;
