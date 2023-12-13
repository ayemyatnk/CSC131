// src/UserList.js
import React, { useState, useEffect } from "react";
import { USER_API } from "../api/api";

const UserList = ({ onUserClick }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch(USER_API.GET_ALL_USERS)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id} onClick={() => onUserClick(user)}>
            Name: {user.name}, Major: {user.major}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
