import React from "react";
import Navbar from "../components/Navbar";
import s from "../css/HomePage.module.css";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [skyScraperHeight, setSkyScraperHeight] = useState(0);
  const [garbageHeight, setGarbageHeight] = useState(0);

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
      -screenSize.scrollY / (screenSize.height - screenSize.innerHeight) <
      0.7
    ) {
      console.log(
        -screenSize.scrollY / (screenSize.height - screenSize.innerHeight)
      );
      setSkyScraperHeight((1300 * screenSize.scrollY) / 900);
    }
    if (
      -screenSize.scrollY / (screenSize.height - screenSize.innerHeight) <
      1
    ) {
      setGarbageHeight((200 * screenSize.scrollY) / 400);
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
          id={s.daybackground}
          src={require("../images/dayBackground.png")}
          alt="background"
        />
        <img
          id={s.garabgeDumpTransparent}
          src={require("../images/garabgeDumpTransparent.png")}
          alt="background"
          style={{ height: garbageHeight }}
        />
        <img
          id={s.sckyscrapersWOBackground}
          src={require("../images/sckyscrapersWOBackground.png")}
          alt="background"
          style={{ height: skyScraperHeight }}
        />
      </div>

      <div id={s.textDisplay}>Clean Thy Shiet</div>
    </>
  );
};

export default HomePage;
