import React from "react";
import { USER_API } from "../api/api";

const DeleteTime = ({ userId, timeId, onDelete }) => {
  const handleDelete = () => {
    // Send a DELETE request to the backend to delete the availability
    fetch(USER_API.DELETE_USER_AVAILABILITY(userId, timeId), {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Availability with ID ${timeId} deleted successfully.`);
          // Optionally update the local state or trigger a refetch of the availability list
          onDelete(timeId);
        } else {
          console.error(`Failed to delete availability with ID ${timeId}.`);
        }
      })
      .catch((error) => console.error("Error deleting availability:", error));
  };

  return (
    <div>
      <h2>Delete Availability</h2>
      <p>Are you sure you want to delete this availability?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteTime;
