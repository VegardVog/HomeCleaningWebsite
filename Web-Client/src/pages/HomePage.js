import React from "react";
import Navbar from "../components/Navbar";
import { Counter } from "../features/counter/counter";
const HomePage = () => {
  return (
    <div className="homePageWrapper">
      <Navbar />

      <div className="homePageContentWrapper">
        <Counter />
      </div>
    </div>
  );
};

export default HomePage;
