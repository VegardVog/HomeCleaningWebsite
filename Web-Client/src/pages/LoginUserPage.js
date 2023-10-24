import "../css/CreateUserPage.css";
import Navbar from "../components/Navbar";
import api from "../api/axiosConfig";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../features/authSlice";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const loginPage = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();
  const { auth } = useSelector((state) => state);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `newPath`;
    navigate(path);
  };

  async function loginUserOnSubmit() {
    try {
      const response = await api
        .post("/api/v1/login", {
          name: username,
          password: password,
        })
        .then((response) => {
          console.log(response);
          if (response.data === true) {
            dispatch(login(username));
            navigate("/");
            console.log("logging in");
          } else if (response.data === false) {
            handleIncorrectValues();
          } else {
          }
        });
      return response;
    } catch (err) {
      console.log(err);
    }
  }

  const handleIncorrectValues = () => {
    console.log("incorrect values");
    document.getElementById("usernameHelp").textContent = "Incorrect username";
    document.getElementById("passwordHelp").textContent = "Incorrect password";
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      username != undefined ||
      username != null ||
      password != undefined ||
      password != null
    ) {
      if (!auth.loggedIn) {
        loginUserOnSubmit();
      } else {
        console.log("Already logged in");
      }
    } else {
      console.log("couldnt submit because username or password was incorrect");
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="formWrapper">
        <form className="createUserForm" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              username
            </label>
            <input
              type="text"
              className="form-control"
              id="username1"
              aria-describedby="usernameHelp"
              name="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <div id="usernameHelp" className="form-text">
              Write your username
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password1"
              name="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <div id="passwordHelp" className="form-text">
              Write your password
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default loginPage;
