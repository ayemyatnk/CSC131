import React from "react";
import { USER_API } from "../api/api";

const DeleteUser = ({ userId, onDelete }) => {
  const handleDelete = () => {
    // Send a DELETE request to the backend to delete the user
    fetch(USER_API.DELETE_USER(userId), {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`User with ID ${userId} deleted successfully.`);
          // Optionally update the local state or trigger a refetch of the user list
          onDelete(userId);
        } else {
          console.error(`Failed to delete user with ID ${userId}.`);
        }
      })
      .catch((error) => console.error("Error deleting user:", error));
  };

  return (
    <div>
      <h2>Delete User</h2>
      <p>Are you sure you want to delete this user?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteUser;
