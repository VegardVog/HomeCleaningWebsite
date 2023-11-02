import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";

const LeaderboardPage = () => {
  const [returnValues, setReturnValues] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api
        .get("/api/v1/getLeaderboard")
        .then((response) => {
          setReturnValues(response.data);

          let responseList = response.data;
          responseList.sort(compare);

          response.data.forEach((element) => {
            let statistics = element.name + ": ";
            let outerListEl = document.getElementById("outerList");
            let liEL = document.createElement("li");
            liEL.setAttribute("id", element.name);

            for (const [key, value] of Object.entries(element.statistics)) {
              statistics = statistics + ", " + key + " " + value;
            }
            liEL.appendChild(document.createTextNode(statistics));
            outerListEl.appendChild(liEL);
          });
        });
    };
    fetchData();
  }, []);

  function compare(a, b) {
    let aCombinedStatistics = 0;
    let bCombinedStatistics = 0;

    for (const [key, value] of Object.entries(a.statistics)) {
      aCombinedStatistics += value;
    }

    for (const [key, value] of Object.entries(b.statistics)) {
      bCombinedStatistics += value;
    }
    if (aCombinedStatistics > bCombinedStatistics) {
      return -1;
    }
    if (aCombinedStatistics < bCombinedStatistics) {
      return 1;
    }
    return 0;
  }

  console.log(returnValues);

  return (
    <div className="homePageWrapper">
      <Navbar />
      LeaderboardPage
      <div id="listWrapper">
        <ul id="outerList"></ul>
      </div>
    </div>
  );
};

export default LeaderboardPage;
