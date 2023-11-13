import React from "react";
import Navbar from "../components/Navbar";
import "../css/HomePage.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [skyScraperHeight, setSkyScraperHeight] = useState(1800);
  const [garbageHeight, setGarbageHeight] = useState(250);

  function getCurrentDimension() {
    return {
      innerWidth: window.innerWidth,
      innerHeight: window.innerHeight,
      outerHeight: window.outerHeight,
      screenX: window.screenX,
      screenY: window.screenY,
      scrollY: window.scrollY,
      height: window.document.body.offsetHeight,
    };
  }

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("scroll", updateDimension);

    if (
      screenSize.scrollY / (screenSize.height - screenSize.innerHeight) <
      0.6
    ) {
      setSkyScraperHeight((1800 * screenSize.scrollY) / 700);
    }
    if (
      screenSize.scrollY / (screenSize.height - screenSize.innerHeight) <
      0.9
    ) {
      setGarbageHeight((250 * screenSize.scrollY) / 300);
    }

    if (
      screenSize.scrollY / (screenSize.height - screenSize.innerHeight) ===
      1
    ) {
    }

    return () => {
      window.removeEventListener("scroll", updateDimension);
    };
  }, [screenSize]);

  return (
    <>
      <Navbar />

      <div className="homePageContentWrapper">
        <img
          id="daybackground"
          src={require("../images/dayBackground.png")}
          alt="background"
        />
        <img
          id="garabgeDumpTransparent"
          src={require("../images/garabgeDumpTransparent.png")}
          alt="background"
          style={{ height: garbageHeight }}
        />
        <img
          id="sckyscrapersWOBackground"
          src={require("../images/sckyscrapersWOBackground.png")}
          alt="background"
          style={{ height: skyScraperHeight }}
        />
      </div>

      <div id="textDisplay">Clean Thy Shiet</div>
    </>
  );
};

export default HomePage;
