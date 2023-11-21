import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import api from "../api/axiosConfig";
import s from "../css/LeaderboardPage.module.css";
import "../css/Basic.css";

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
          let outerListEl = document.getElementById(s.outerList);

          //Remove all existing children of outerlist
          while (outerListEl.lastChild) {
            console.log(outerListEl.lastChild);
            outerListEl.removeChild(outerListEl.lastChild);
          }

          response.data.forEach((element) => {
            let statistics = element.name + ": ";

            let liEL = document.createElement("li");
            liEL.setAttribute("class", s.listEntry);

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
    <>
      <Navbar />

      <div id={s.listWrapper} className="pageWrapper">
        <ul id={s.outerList}></ul>
      </div>
    </>
  );
};

export default LeaderboardPage;
