import React, { useState, useEffect } from "react";
import { USER_API } from "../api/api";
import DeleteUser from "./DeleteUser"; // Import the DeleteUser component

const UserList = ({ onUserClick }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend
    fetch(USER_API.GET_ALL_USERS)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleDeleteUser = (deletedUserId) => {
    // Update the local state to remove the deleted user
    setUsers((prevUsers) => prevUsers.filter((user) => user.user_id !== deletedUserId));
  };

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user.user_id} onClick={() => onUserClick(user)}>
            Name: {user.name}, Major: {user.major}, Age: {user.age}
            {/* Integrate DeleteUser component */}
            <DeleteUser userId={user.user_id} onDelete={handleDeleteUser} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
