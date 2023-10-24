import Navbar from "../components/Navbar";
import api from "../api/axiosConfig";
import React, { useState, useEffect } from "react";

const UsersPage = () => {
  const [users, setUsers] = useState();

  const getUsers = async () => {
    try {
      const response = await api.get("/api/v1/users");

      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <div className="usersPageWrapper">
        <Navbar />
        <div>UsersPage</div>
        <ul>
          {users != undefined &&
            users.length > 0 &&
            users.map((item) => <li>{item.name} </li>)}
        </ul>
      </div>
    </>
  );
};

export default UsersPage;
