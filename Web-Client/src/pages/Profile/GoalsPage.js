import React from "react";
import Navbar from "../../components/Navbar";
import "../../css/Basic.css";
import "../../css/GoalPage.css";
import { useState, useEffect } from "react";
import api from "../../api/axiosConfig";
import { useSelector } from "react-redux";

const StatisticsPage = () => {
  const [goalList, setGoalList] = useState([]);
  const { auth } = useSelector((state) => state);

  const addListElementstoHTML = () => {
    let goalsUL = document.getElementById("goalsUL");
    //Remove all existing children of outerlist
    while (goalsUL.lastChild) {
      goalsUL.removeChild(goalsUL.lastChild);
    }

    for (let i = 0; i < goalList.length; i++) {
      let liEl = document.createElement("li");
      let deleteButton = document.createElement("button");

      deleteButton.setAttribute("class", "deleteButtonLi");
      deleteButton.appendChild(document.createTextNode("Delete"));
      deleteButton.value = i;
      deleteButton.onclick = function () {
        buttonClickDelete(i);
      };
      liEl.setAttribute("class", "ulLI");
      liEl.appendChild(document.createTextNode(goalList[i]));
      liEl.appendChild(deleteButton);
      goalsUL.appendChild(liEl);
    }
  };

  useEffect(() => {
    addListElementstoHTML();
  }, [goalList]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await api
        .post("/api/v1/goalsFromDB/getGoals", { name: auth.name })
        .then((response) => {
          console.log(auth.name);
          let responseData = response.data;
          setGoalList(responseData);
        });
    };
    fetchData();
  }, []);

  async function postGoalsToDB() {
    let postGoalList = [auth.name, ...goalList];
    console.log(postGoalList);
    try {
      const response = await api
        .post("/api/v1/goalsFromDB/postGoals", postGoalList)
        .then((response) => {
          console.log(response);
        });
    } catch (err) {
      console.log(err);
    }
  }
  const buttonClickDelete = (i) => {
    let newGoalList = goalList;
    console.log(newGoalList);
    newGoalList.splice(i, 1);
    console.log(newGoalList);

    setGoalList(newGoalList);
    postGoalsToDB();

    addListElementstoHTML();
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let inputValue = document.getElementById("goalInput").value;
    if (!(inputValue === "" || inputValue === null)) {
      let newGoalList = goalList;
      newGoalList.push(inputValue);
      setGoalList(newGoalList);

      addListElementstoHTML();

      postGoalsToDB();
    }
  };

  return (
    <>
      <Navbar />
      <div className="pageWrapper">
        <div id="homePageWrapper">
          <form onSubmit={handleSubmit}>
            <div className="mb-3" id="inputGoal">
              <label for="inputGoal" className="form-label">
                Input Goal
              </label>
              <input
                type="goal"
                className="form-control"
                id="goalInput"
                aria-describedby="goalInput"
              />

              <button
                type="submit"
                className="btn btn-primary"
                id="inputButton"
              >
                Submit
              </button>
            </div>
          </form>

          <div id="goalsList">
            <ul id="goalsUL"></ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default StatisticsPage;
