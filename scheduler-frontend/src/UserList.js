// src/UserList.js
import React, { useState, useEffect } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the Spring Boot backend
    fetch("http://localhost:8080/api/user")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            Name: {user.name}, Major: {user.major}, Age: {user.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
