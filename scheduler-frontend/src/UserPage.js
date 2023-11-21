import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";

const UserPage = () => {
  // Define the users state and setUsers function
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    // Set the selected user for editing
    setSelectedUser(user);
  };

  const handleFormSubmit = (newUser) => {
    // If editing, update the user in the list
    if (selectedUser) {
      setUsers((prevUsers) => prevUsers.map((user) => (user.user_id === newUser.user_id ? newUser : user)));
    } else {
      // If adding, add the new user to the list
      setUsers((prevUsers) => [...prevUsers, newUser]);
    }

    // Clear the selected user
    setSelectedUser(null);
  };

  return (
    <div>
      {/* Pass users and onUserClick as props to UserList */}
      <UserList users={users} onUserClick={handleUserClick} />
      {/* Pass onSubmit and initialValues as props to UserForm */}
      <UserForm onSubmit={handleFormSubmit} initialValues={selectedUser} />
    </div>
  );
};

export default UserPage;
