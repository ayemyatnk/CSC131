// to display a list of users
import React, { useState, useEffect } from "react";
import axios from "axios";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    axios
      .get("http://localhost:8080/api/user")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id}>
            {`ID: ${user.user_id}, Name: ${user.name}, Major: ${user.major}, Age: ${user.age}`}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
