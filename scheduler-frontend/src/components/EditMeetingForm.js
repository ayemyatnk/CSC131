import React, { useState } from "react";
import { MEETING_API } from "../api/api";
import DeleteMeeting from "./DeleteMeeting";

const EditMeetingForm = ({ meetingId, start, end, onUpdate }) => {
  const [newStart, setNewStart] = useState(start);
  const [newEnd, setNewEnd] = useState(end);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the backend for updating the meeting
    fetch(MEETING_API.EDIT_MEETING(meetingId), {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        start: parseInt(newStart, 10),
        end: parseInt(newEnd, 10),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Meeting updated:", data);
        // Optionally update the local state or trigger a refetch of the meeting list
        onUpdate();
      })
      .catch((error) => console.error("Error updating meeting:", error));
  };

  const handleDelete = () => {
    // You can implement any logic you need before deleting, e.g., confirmation dialog
    // For now, let's directly delete the meeting
    fetch(MEETING_API.DELETE_MEETING(meetingId), {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          console.log(`Meeting with ID ${meetingId} deleted successfully.`);
          // Optionally update the local state or trigger a refetch of the meeting list
          onUpdate();
        } else {
          console.error(`Failed to delete meeting with ID ${meetingId}.`);
        }
      })
      .catch((error) => console.error("Error deleting meeting:", error));
  };

  return (
    <div>
      <h2>Edit Meeting</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Start:
          <input type="text" value={newStart} onChange={(e) => setNewStart(e.target.value)} />
        </label>
        <label>
          End:
          <input type="text" value={newEnd} onChange={(e) => setNewEnd(e.target.value)} />
        </label>
        <button type="submit">Update Meeting</button>
      </form>

      {/* Include the DeleteMeeting component with the onDelete callback */}
      <DeleteMeeting meetingId={meetingId} onDelete={handleDelete} />
    </div>
  );
};

export default EditMeetingForm;
