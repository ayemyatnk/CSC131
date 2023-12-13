import React, { useState, useEffect } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import { USER_API } from "../api/api";

const UserPage = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch(USER_API.GET_ALL_USERS)
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));
  }, []);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleFormSubmit = async (newUser) => {
    try {
      if (selectedUser) {
        // Editing an existing user
        const response = await fetch(USER_API.EDIT_USER(selectedUser.user_id), {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          // Update the user in the list
          setUsers((prevUsers) => prevUsers.map((user) => (user.user_id === newUser.user_id ? newUser : user)));
          setSelectedUser(null);
        } else {
          console.error("Failed to edit user.");
        }
      } else {
        // Adding a new user
        const response = await fetch(USER_API.ADD_USER, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newUser),
        });

        if (response.ok) {
          // Add the new user to the list
          setUsers((prevUsers) => [...prevUsers, newUser]);
        } else {
          console.error("Failed to add user.");
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <UserList users={users} onUserClick={handleUserClick} />
      <UserForm onSubmit={handleFormSubmit} initialValues={selectedUser} />
    </div>
  );
};

export default UserPage;
