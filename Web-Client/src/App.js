import "./App.css";
import api from "./api/axiosConfig";
import React, { useState, useEffect, Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersPage from "./pages/UsersPage";
import CreateUserPage from "./pages/CreateUserPage";
import LoginUserPage from "./pages/LoginUserPage";
import LeaderboardPage from "./pages/LeaderboardPage";
import StatisticsPage from "./pages/Profile/StatisticsPage";
import GoalsPage from "./pages/Profile/GoalsPage";
import MyPage from "./pages/Profile/MyPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"*"} Component={HomePage} />
        <Route path={"users"} Component={UsersPage} />
        <Route path={"createuser"} Component={CreateUserPage} />
        <Route path={"login"} Component={LoginUserPage} />
        <Route path={"statisticsPage"} Component={StatisticsPage} />
        <Route path={"myPage"} Component={MyPage} />
        <Route path={"leaderboardPage"} Component={LeaderboardPage} />
        <Route path={"goalsPage"} Component={GoalsPage} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
