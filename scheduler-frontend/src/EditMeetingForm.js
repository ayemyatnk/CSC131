// to edit existing meetings
import React, { useState } from "react";

const EditMeetingForm = ({ meetingId, start, end }) => {
  const [newStart, setNewStart] = useState(start);
  const [newEnd, setNewEnd] = useState(end);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Submit form data to the Spring Boot backend for updating the meeting
    fetch(`http://localhost:8080/api/meeting/${meetingId}?start=${newStart}&end=${newEnd}`, {
      method: "PUT",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Meeting updated:", data);
        // Optionally update the local state or trigger a refetch of the meeting list
      })
      .catch((error) => console.error("Error updating meeting:", error));
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
    </div>
  );
};

export default EditMeetingForm;
