import React from "react";
import Navbar from "../../components/Navbar";
import api from "../../api/axiosConfig";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../../features/authSlice";
import "../../css/Basic.css";
import "../../css/InputValuesPage.css";

const InputValuesPage = () => {
  const { auth } = useSelector((state) => state);

  async function submitValues(dict) {
    try {
      const response = await api
        .post("/api/v1/myPageSubmit", dict)
        .then((response) => {
          console.log(response);
          if (response.data === true) {
          } else {
          }
        });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    if (auth.name != "") {
      let dict = {};

      //Adds name to dictionary for backend use
      dict["name"] = auth.name;
      dict["kjokkene"] = document.getElementById("kjøkkene").checked;
      dict["stovsuging"] = document.getElementById("støvsuging").checked;
      dict["boss"] = document.getElementById("boss").checked;
      dict["do"] = document.getElementById("do").checked;
      dict["handling"] = document.getElementById("handling").checked;
      dict["matlaging"] = document.getElementById("matlaging").checked;
      console.log(dict);
      submitValues(dict);
    }
  };

  return (
    <>
      <Navbar />
      <div className="pageWrapper">
        <div className="formWrapper">
          <form className="createUserForm" onSubmit={handleSubmit}>
            <div>
              <input type="checkbox" id="kjøkkene" name="kjøkkene" />
              <label for="kjøkkene">Kjøkkene</label>
            </div>
            <div>
              <input type="checkbox" id="støvsuging" name="støvsuging" />
              <label for="støvsuging">Støvsuging</label>
            </div>
            <div>
              <input type="checkbox" id="boss" name="boss" />
              <label for="boss">Boss</label>
            </div>
            <div>
              <input type="checkbox" id="do" name="do" />
              <label for="do">Do</label>
            </div>
            <div>
              <input type="checkbox" id="handling" name="handling" />
              <label for="handling">Handling</label>
            </div>
            <div>
              <input type="checkbox" id="matlaging" name="matlaging" />
              <label for="matlaging">Matlaging</label>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default InputValuesPage;
