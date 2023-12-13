import React from "react";
import { MEETING_API } from "../api/api";

const DeleteMeeting = ({ meetingId, onDelete }) => {
  const handleDelete = () => {
    // Send a DELETE request to the backend to delete the meeting
    fetch(MEETING_API.DELETE_MEETING(meetingId), {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Meeting with ID ${meetingId} deleted successfully.`);
          // Optionally update the local state or trigger a refetch of the meeting list
          onDelete(meetingId);
        } else {
          console.error(`Failed to delete meeting with ID ${meetingId}.`);
        }
      })
      .catch((error) => console.error("Error deleting meeting:", error));
  };

  return (
    <div>
      <h2>Delete Meeting</h2>
      <p>Are you sure you want to delete this meeting?</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DeleteMeeting;
